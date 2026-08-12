import React from "react";

import { stats } from "../constants";
import FadeIn from "./ui/FadeIn";

/** Compact proof strip — the numbers that carry the most weight. */
const Stats = () => {
  return (
    <section className="bg-primary px-5 sm:px-8 md:px-10 pt-14 pb-6 sm:pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
        {stats.map((s, i) => (
          <FadeIn
            key={s.label}
            delay={i * 0.08}
            y={24}
            className="text-center lg:border-l lg:border-frost/10 lg:first:border-l-0 lg:px-4"
          >
            <p
              className="hero-heading font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(2rem, 5.5vw, 3.6rem)" }}
            >
              {s.value}
            </p>
            <p className="text-frost font-medium uppercase tracking-wider text-[11px] sm:text-sm mt-3">
              {s.label}
            </p>
            <p className="text-secondary font-light text-[10px] sm:text-xs mt-1">
              {s.sub}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Stats;
