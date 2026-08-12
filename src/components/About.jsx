import React from "react";

import { aiModels } from "../constants";
import FadeIn from "./ui/FadeIn";
import AnimatedText from "./ui/AnimatedText";
import ContactButton from "./ui/ContactButton";

const ABOUT_TEXT =
  "I'm an AI-specialist product manager for prediction markets — I scaled Forkast past $1B in on-chain volume, now clearing $1M+ every day, raised $3M inside a $12M Arbitrum Ventures round, and head a CFTC license division. I also lead the AI department at DY Patil B-School, because the fastest way to understand a frontier is to teach it.";

/** Floating "model chip" — the AI PM's toolkit, orbiting the copy. */
const ModelChip = ({ model, className = "", delay = 0, x = 0, rot = 0, floatDelay = 0 }) => (
  <FadeIn
    delay={delay}
    x={x}
    y={0}
    duration={0.9}
    className={`absolute hidden sm:block pointer-events-none select-none ${className}`}
  >
    <div
      className="chip-float rounded-2xl border border-frost/15 bg-black-100/80 backdrop-blur-sm px-5 py-3 md:px-6 md:py-4"
      style={{
        "--chip-rot": `${rot}deg`,
        animationDelay: `${floatDelay}s`,
        boxShadow: `0 0 42px ${model.color}2E`,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: model.color }}
        />
        <span className="text-frost/50 text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-light">
          {model.vendor}
        </span>
      </div>
      <p className="text-frost font-semibold uppercase tracking-wide text-sm md:text-lg mt-0.5">
        {model.name}
      </p>
    </div>
  </FadeIn>
);

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-primary min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 scroll-mt-[90px]"
      style={{ overflowX: "clip" }}
    >
      {/* floating AI chips in the corners */}
      <ModelChip model={aiModels[0]} className="top-[6%] left-[2%] md:left-[5%]" delay={0.1} x={-80} rot={-6} floatDelay={0} />
      <ModelChip model={aiModels[1]} className="top-[8%] right-[2%] md:right-[5%]" delay={0.15} x={80} rot={5} floatDelay={1.2} />
      <ModelChip model={aiModels[2]} className="bottom-[10%] left-[4%] md:left-[9%]" delay={0.25} x={-80} rot={4} floatDelay={2.1} />
      <ModelChip model={aiModels[3]} className="bottom-[8%] right-[4%] md:right-[9%]" delay={0.3} x={80} rot={-5} floatDelay={0.7} />

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 max-w-5xl">
        <FadeIn as="h2" y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          className="text-frost font-medium text-center leading-relaxed max-w-[620px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        <FadeIn delay={0.1} y={20} className="mt-2 sm:mt-4">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
