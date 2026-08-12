import React, { useEffect, useRef } from "react";

import {
  forkastHome,
  atlasAgent,
  blockmenShot,
  buddiShot,
  ugc,
  create,
  Pluto,
  magicbatch,
  health,
  jobit,
} from "../assets";

// Flagship work leads each row; older builds fill in behind it.
const ROW_ONE = [forkastHome, atlasAgent, ugc, create, magicbatch];
const ROW_TWO = [blockmenShot, buddiShot, Pluto, health, jobit];

const MarqueeRow = React.forwardRef(({ images, rowKey }, ref) => (
  <div className="overflow-hidden">
    <div ref={ref} className="flex gap-3 w-max" style={{ willChange: "transform" }}>
      {[...images, ...images, ...images].map((src, i) => (
        <img
          key={`${rowKey}-${i}`}
          src={src}
          alt=""
          loading="lazy"
          draggable={false}
          className="w-[260px] h-[170px] sm:w-[340px] sm:h-[220px] md:w-[420px] md:h-[270px]
            rounded-2xl object-cover select-none border border-frost/10
            brightness-[0.92] hover:brightness-110 transition-[filter] duration-300"
        />
      ))}
    </div>
  </div>
));

MarqueeRow.displayName = "MarqueeRow";

/**
 * "Second frame" — two rows of shipped-product shots that slide
 * horizontally, driven by page scroll. Row 1 moves right, row 2 left.
 */
const Marquee = () => {
  const sectionRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      // Skip work entirely while off-screen
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;

      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      // Wrap into [-setWidth, 0] so the images loop seamlessly and the
      // row never slides past its start (no blank strips at the edges).
      const applyTransform = (row, delta) => {
        if (!row) return;
        const setWidth = row.scrollWidth / 3;
        if (!setWidth) return;
        const x = -setWidth + (((delta % setWidth) + setWidth) % setWidth);
        row.style.transform = `translate3d(${x}px, 0, 0)`;
      };
      applyTransform(rowOneRef.current, offset - 200);
      applyTransform(rowTwoRef.current, -(offset - 200));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-primary pt-24 sm:pt-32 md:pt-40 pb-10"
      style={{ overflowX: "clip" }}
    >
      <p className="text-center text-secondary uppercase tracking-[0.35em] text-[10px] sm:text-xs font-light mb-8 sm:mb-10 px-6">
        Shipped products · 0 → 1 → scale
      </p>
      <div className="flex flex-col gap-3">
        <MarqueeRow ref={rowOneRef} images={ROW_ONE} rowKey="r1" />
        <MarqueeRow ref={rowTwoRef} images={ROW_TWO} rowKey="r2" />
      </div>
    </section>
  );
};

export default Marquee;
