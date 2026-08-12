import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useInView } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, RoundedBox } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import { aiModels } from "../../constants";

/* ---------------------------------------------------------------- *
 * Everything in this scene is procedural — no GLTF, no textures to
 * download. It exists to replace a 15MB model with something that
 * paints on the very first frame.
 * ---------------------------------------------------------------- */

const roundRectPath = (ctx, x, y, w, h, r) => {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
};

/** Draws a "model chip" label onto an offscreen canvas. */
const drawCardTexture = (canvas, { name, vendor, color }) => {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  // Card face
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, "#171B20");
  bg.addColorStop(1, "#0E1114");
  ctx.fillStyle = bg;
  roundRectPath(ctx, 0, 0, W, H, 40);
  ctx.fill();

  // Accent edge (left)
  ctx.save();
  roundRectPath(ctx, 0, 0, W, H, 40);
  ctx.clip();
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 14, H);
  const glow = ctx.createLinearGradient(0, 0, 190, 0);
  glow.addColorStop(0, `${color}55`);
  glow.addColorStop(1, `${color}00`);
  ctx.fillStyle = glow;
  ctx.fillRect(14, 0, 176, H);
  ctx.restore();

  // Hairline border
  ctx.strokeStyle = "rgba(215, 226, 234, 0.28)";
  ctx.lineWidth = 3;
  roundRectPath(ctx, 1.5, 1.5, W - 3, H - 3, 38);
  ctx.stroke();

  // Status dot
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(W - 58, 56, 10, 0, Math.PI * 2);
  ctx.fill();

  // Vendor
  ctx.fillStyle = "rgba(215, 226, 234, 0.55)";
  ctx.font = "500 30px Kanit, sans-serif";
  ctx.textBaseline = "alphabetic";
  ctx.fillText(vendor.toUpperCase(), 52, 96);

  // Model name
  ctx.fillStyle = "#D7E2EA";
  ctx.font = "800 88px Kanit, sans-serif";
  ctx.fillText(name.toUpperCase(), 48, 210);

  // Footer caption
  ctx.fillStyle = "rgba(215, 226, 234, 0.4)";
  ctx.font = "300 26px Kanit, sans-serif";
  ctx.fillText("SHIPPING WITH IT DAILY", 52, 274);
};

/** Radial glow halo texture, one per accent color. */
const makeGlowTexture = (color) => {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  const g = ctx.createRadialGradient(128, 128, 10, 128, 128, 128);
  g.addColorStop(0, `${color}66`);
  g.addColorStop(0.5, `${color}22`);
  g.addColorStop(1, `${color}00`);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};

// Shared hover counter so the cursor resets correctly when the pointer
// moves directly from one card to another (out/over event order varies).
let cursorHovers = 0;
const bumpCursor = (delta) => {
  cursorHovers = Math.max(0, cursorHovers + delta);
  document.body.style.cursor = cursorHovers > 0 ? "pointer" : "auto";
};

const ModelCard = ({ model, position, rotationY = 0, phase = 0, speed = 1 }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);

  const { faceTexture, glowTexture } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    drawCardTexture(canvas, model);
    const faceTexture = new THREE.CanvasTexture(canvas);
    faceTexture.encoding = THREE.sRGBEncoding;
    faceTexture.anisotropy = 4;

    // Redraw once the display font is actually loaded
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        drawCardTexture(canvas, model);
        faceTexture.needsUpdate = true;
      });
    }
    return { faceTexture, glowTexture: makeGlowTexture(model.color) };
  }, [model]);

  useEffect(() => {
    return () => {
      faceTexture.dispose();
      glowTexture.dispose();
    };
  }, [faceTexture, glowTexture]);

  useEffect(() => {
    // release the cursor if this card unmounts while hovered
    return () => {
      if (hoveredRef.current) bumpCursor(-1);
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.position.y = position[1] + Math.sin(t * 0.7 * speed + phase) * 0.16;
    group.current.rotation.x = Math.sin(t * 0.4 * speed + phase) * 0.05;
    group.current.rotation.y =
      rotationY + Math.cos(t * 0.3 * speed + phase) * 0.08;

    const target = hovered ? 1.1 : 1;
    const s = THREE.MathUtils.lerp(group.current.scale.x, target, 0.12);
    group.current.scale.setScalar(s);
  });

  return (
    <group
      ref={group}
      position={position}
      rotation={[0, rotationY, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        if (!hoveredRef.current) {
          hoveredRef.current = true;
          setHovered(true);
          bumpCursor(1);
        }
      }}
      onPointerOut={() => {
        if (hoveredRef.current) {
          hoveredRef.current = false;
          setHovered(false);
          bumpCursor(-1);
        }
      }}
    >
      {/* glow halo */}
      <mesh position={[0, 0, -0.18]}>
        <planeGeometry args={[3.6, 2.5]} />
        <meshBasicMaterial
          map={glowTexture}
          transparent
          opacity={hovered ? 0.85 : 0.5}
          depthWrite={false}
        />
      </mesh>

      {/* card body */}
      <RoundedBox args={[2.3, 1.44, 0.09]} radius={0.04} smoothness={3}>
        <meshStandardMaterial color="#101318" metalness={0.55} roughness={0.4} />
      </RoundedBox>

      {/* label face */}
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[2.3, 1.44]} />
        <meshBasicMaterial map={faceTexture} transparent />
      </mesh>
    </group>
  );
};

const NeuralCore = () => {
  const outer = useRef();
  const inner = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outer.current) {
      outer.current.rotation.y = t * 0.12;
      outer.current.rotation.x = t * 0.05;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.2;
      const pulse = 1 + Math.sin(t * 1.4) * 0.06;
      inner.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      <mesh ref={outer}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color="#39414A" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner}>
        <icosahedronGeometry args={[0.46, 2]} />
        <meshStandardMaterial
          color="#0C0C0C"
          emissive="#B600A8"
          emissiveIntensity={1.15}
          roughness={0.3}
        />
      </mesh>
      <pointLight color="#B600A8" intensity={2.2} distance={9} />
    </group>
  );
};

const OrbitRing = ({ radius, tilt, speed, color = "#262C33" }) => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * speed;
  });
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.006, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

const Particles = ({ count = 350 }) => {
  const ref = useRef();
  const [positions] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius: 4.6 })
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y -= delta / 22;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#8A99A5"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.45}
      />
    </Points>
  );
};

const Scene = ({ isMobile }) => {
  const parallax = useRef();
  const camera = useThree((state) => state.camera);

  // Keep the framing correct across breakpoint changes — the Canvas
  // `camera` prop only applies at creation time.
  useEffect(() => {
    camera.position.z = isMobile ? 10.2 : 8.4;
    camera.updateProjectionMatrix();
  }, [isMobile, camera]);

  useFrame((state) => {
    if (!parallax.current) return;
    const { x, y } = state.pointer;
    parallax.current.rotation.y = THREE.MathUtils.lerp(
      parallax.current.rotation.y,
      x * 0.16,
      0.05
    );
    parallax.current.rotation.x = THREE.MathUtils.lerp(
      parallax.current.rotation.x,
      -y * 0.09,
      0.05
    );
  });

  const cards = useMemo(() => {
    // Mobile stacks the cards vertically inside the narrow frustum;
    // desktop fans them out around the core.
    const layout = isMobile
      ? [
          [-1.5, 2.9, 0.3],
          [1.5, 2.15, 0.15],
          [-1.5, -2.15, 0.5],
          [1.5, -2.9, 0.4],
        ]
      : [
          [-2.95, 0.95, 0.35],
          [2.95, 1.2, 0.15],
          [-2.6, -0.95, 0.85],
          [2.65, -0.85, 0.65],
        ];
    const spin = [0.3, -0.32, 0.24, -0.26];
    const phases = [0.4, 2.1, 4.2, 5.6];
    const speeds = [1, 0.9, 1.1, 0.95];
    return aiModels.map((model, i) => ({
      model,
      position: layout[i],
      rotationY: isMobile ? spin[i] * 0.5 : spin[i],
      phase: phases[i],
      speed: speeds[i],
    }));
  }, [isMobile]);

  return (
    <group ref={parallax}>
      <group scale={isMobile ? 0.55 : 1} position={[0, isMobile ? 0 : 0.05, 0]}>
        <NeuralCore />
        <OrbitRing radius={2.6} tilt={[Math.PI / 2.4, 0.2, 0]} speed={0.14} />
        <OrbitRing radius={3.3} tilt={[Math.PI / 1.9, -0.35, 0]} speed={-0.1} />
        <Particles count={isMobile ? 160 : 350} />
        {cards.map((card) => (
          <ModelCard key={card.model.name} {...card} />
        ))}
      </group>
    </group>
  );
};

const AICardsCanvas = () => {
  // Synchronous init so the camera is right on the very first frame
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches
  );

  // Stop rendering entirely once the hero scrolls out of view
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div ref={wrapRef} className="w-full h-full">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={inView ? "always" : "never"}
        camera={{ position: [0, 0, isMobile ? 10.2 : 8.4], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={0.9} />
        <directionalLight position={[-4, -2, 3]} intensity={0.25} color="#4E8CF9" />
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  );
};

export default AICardsCanvas;
