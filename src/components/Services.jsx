import React from "react";

import { aiServices } from "../constants";
import FadeIn from "./ui/FadeIn";

/**
 * White interlude section — numbered list of what I actually do.
 * Rounded top corners create the layered-sheet transition.
 */
const Services = () => {
  return (
    <section className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-36 md:pb-44">
      <FadeIn as="h2" y={40}
        className="text-primary font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {aiServices.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className={`flex flex-col sm:flex-row items-start gap-2 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12 ${
              i > 0 ? "border-t border-[#0C0C0C]/15" : ""
            }`}
          >
            <span
              className="text-primary font-black leading-none shrink-0"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {service.number}
            </span>
            <div className="pt-1 sm:pt-3">
              <h3
                className="text-primary font-medium uppercase tracking-wide"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {service.name}
              </h3>
              <p
                className="text-primary font-light leading-relaxed max-w-2xl mt-2 opacity-60"
                style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Services;
