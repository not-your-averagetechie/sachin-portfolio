import React from "react";

import { technologies } from "../constants";
import { styles } from "../styles";
import FadeIn from "./ui/FadeIn";

/**
 * Infinite CSS marquee of the stack — replaces 13 separate WebGL
 * canvases with one buttery, zero-cost animation.
 */
const Tech = () => {
  return (
    <section className="bg-primary py-16 sm:py-20" style={{ overflowX: "clip" }}>
      <FadeIn y={20} className="text-center mb-10">
        <p className={styles.sectionSubText}>The toolkit</p>
      </FadeIn>

      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-primary to-transparent" />

        <div className="tech-marquee flex w-max gap-4 sm:gap-6 px-3">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 rounded-full border border-frost/15 bg-black-100 px-5 py-3 sm:px-6 sm:py-3.5 shrink-0"
            >
              {tech.icon ? (
                <img
                  src={tech.icon}
                  alt=""
                  loading="lazy"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              )}
              <span
                className={`text-frost/80 text-xs sm:text-sm font-medium tracking-wider whitespace-nowrap ${
                  tech.preserveCase ? "normal-case" : "uppercase"
                }`}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
