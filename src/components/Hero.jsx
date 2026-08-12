import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import FadeIn from "./ui/FadeIn";
import ContactButton from "./ui/ContactButton";
import Magnet from "./ui/Magnet";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  // Respect reduced-motion: hold on the first frame instead of looping
  const [allowMotion] = useState(
    () =>
      typeof window === "undefined" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !allowMotion) return;
    // Some mobile browsers reject the initial autoplay attempt; retry once ready.
    const tryPlay = () => {
      const p = video.play();
      if (p?.catch) p.catch(() => {});
    };
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    return () => video.removeEventListener("loadeddata", tryPlay);
  }, [allowMotion]);

  return (
    <section
      className="relative w-full h-[70vh] min-h-[560px] md:h-screen md:min-h-0 flex flex-col bg-primary"
      style={{ overflowX: "clip" }}
    >
      {/* ---------- video background ---------- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          autoPlay={allowMotion}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onLoadedData={() => setReady(true)}
          /* On phones the element is deliberately taller than its clipping
             container and top-anchored, so the dark lower third of the frame is
             cropped away rather than squeezed into view. (object-position can't
             do this: at these aspect ratios cover fits the full height and only
             crops horizontally.) */
          className={`absolute inset-x-0 top-0 w-full h-[155%] md:h-full object-cover object-center
            transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}
        />

        {/* film grain — light touch, just texture */}
        <div className="noise-overlay absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none" />

        {/* Soft top vignette so the navbar reads; the frame stays clear below it. */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent pointer-events-none" />

        {/* Directional scrim, only as dark as the text needs. Inline gradients
            rather than Tailwind stops so the exact ramp is guaranteed. */}
        <div
          className="absolute inset-0 md:hidden pointer-events-none"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 55%, rgba(0,0,0,0.14) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden md:block pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.34) 40%, rgba(0,0,0,0.04) 72%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Base fade into the page colour — kills the hard seam where the hero
            met the next section, and doubles as the floor for the bottom bar. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[26%] md:h-[22%] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0C0C0C 0%, rgba(12,12,12,0.72) 38%, rgba(12,12,12,0) 100%)",
          }}
        />
      </div>

      {/* ---------- content ----------
          Phones: sits straight under the navbar (flex-none) so the copy and the
          bar below it read as one tight block, with the video filling the rest.
          md+: grows to fill, centred and biased up so it clears the subject. */}
      <div className="relative z-10 flex-none md:flex-1 flex flex-col justify-center px-6 md:px-10 pt-20 md:pt-24 pb-0 md:pb-[20vh]">
        <FadeIn delay={0.1} y={16} className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="h-[1px] w-8 sm:w-14 bg-frost/60" />
          <span className="on-video-text text-frost/90 uppercase tracking-[0.4em] text-[9px] sm:text-[11px] font-light">
            AI Product Manager
          </span>
        </FadeIn>

        <div className="overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.2}
            y={40}
            duration={0.9}
            className="hero-heading-video font-black uppercase tracking-tight leading-[0.85] w-full
              text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9.5vw]"
          >
            Hi, i&apos;m sachin
          </FadeIn>
        </div>

        <FadeIn
          delay={0.4}
          y={20}
          className="mt-5 sm:mt-7 max-w-[640px]"
        >
          <p
            className="on-video-text text-white font-light leading-relaxed"
            style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.35rem)" }}
          >
            I turn frontier models into products that ship — agentic trading
            systems, prediction markets and AI curricula.
          </p>
          <p className="on-video-text text-frost/95 font-light uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-4">
            Product Head @Forkast.gg · AI Professor @DY&nbsp;Patil · Founder
            @BLOCKMEN
          </p>
        </FadeIn>
      </div>

      {/* ---------- bottom bar ----------
          Follows the copy directly on phones; pinned to the floor on md+. */}
      <div className="relative z-10 flex flex-wrap items-end justify-between gap-5 sm:gap-6 px-6 md:px-10 mt-8 md:mt-0 pb-8 sm:pb-10">
        <FadeIn delay={0.55} y={16} className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="on-video-text text-frost/85 uppercase tracking-[0.28em] text-[9px] sm:text-[11px] font-light">
            Open to Dubai · Remote / Hybrid
          </span>
        </FadeIn>

        <FadeIn delay={0.65} y={20}>
          <Magnet padding={80} strength={7}>
            <ContactButton />
          </Magnet>
        </FadeIn>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:block pointer-events-none">
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-gradient-to-b from-transparent via-frost/70 to-transparent"
        />
      </div>
    </section>
  );
};

export default Hero;
