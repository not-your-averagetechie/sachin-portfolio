import React from "react";

import { teaching, education, testScores } from "../constants";
import FadeIn from "./ui/FadeIn";

const Teaching = () => {
  return (
    <section
      id="teaching"
      className="relative bg-primary px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 scroll-mt-[90px]"
      style={{ overflowX: "clip" }}
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn y={20} className="text-center">
          <p className="text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs font-light">
            Teaching &amp; credentials
          </p>
        </FadeIn>

        <FadeIn as="h2" y={40}
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mt-4 mb-6"
          style={{ fontSize: "clamp(2.6rem, 10vw, 130px)" }}
        >
          Professor
        </FadeIn>

        <FadeIn delay={0.1} y={20} className="text-center max-w-3xl mx-auto">
          <p className="text-frost font-medium text-base sm:text-lg leading-snug">
            {teaching.role}
          </p>
          <p className="text-secondary text-sm sm:text-base mt-1">
            {teaching.school} · {teaching.since}
          </p>
          <p className="text-frost/70 font-light leading-relaxed mt-6 text-sm sm:text-base">
            {teaching.intro}
          </p>
        </FadeIn>

        {/* what the role covers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {teaching.highlights.map((h, i) => (
            <FadeIn
              key={h.title}
              delay={i * 0.1}
              y={30}
              className="rounded-3xl border border-frost/15 bg-black-100 p-6"
            >
              <h3 className="text-frost font-semibold uppercase tracking-wide text-sm sm:text-base">
                {h.title}
              </h3>
              <p className="text-secondary font-light text-sm leading-relaxed mt-3">
                {h.body}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* student capstones — third-party proof of teaching impact */}
        <FadeIn y={30} className="mt-20">
          <h3 className="text-frost font-semibold uppercase tracking-wide text-lg sm:text-xl">
            Capstones I supervised
          </h3>
          <p className="text-secondary font-light text-sm mt-2">
            Published by the students themselves, each crediting the guidance by name.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {teaching.capstones.map((c, i) => (
            <FadeIn
              key={c.student}
              delay={i * 0.1}
              y={30}
              className="rounded-3xl border border-frost/15 bg-tertiary p-6 flex flex-col"
            >
              <p className="text-accent uppercase tracking-[0.2em] text-[10px] font-medium">
                {c.program}
              </p>
              <h4 className="text-frost font-semibold text-base mt-2">
                {c.project}
              </h4>
              <p className="text-secondary font-light text-sm leading-relaxed mt-3 flex-1">
                {c.body}
              </p>
              <p className="text-frost/50 text-xs uppercase tracking-wider mt-5 pt-4 border-t border-frost/10">
                {c.student}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* education + scores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
          <div className="flex flex-col gap-4">
            {education.map((e, i) => (
              <FadeIn
                key={e.school}
                delay={i * 0.1}
                y={30}
                className="rounded-3xl border border-frost/15 bg-black-100 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="text-frost font-semibold uppercase tracking-wide text-base sm:text-lg">
                    {e.school}
                  </h4>
                  <span className="text-accent font-medium text-sm whitespace-nowrap">
                    {e.grade}
                  </span>
                </div>
                <p className="text-frost/80 text-sm mt-1">{e.program}</p>
                <p className="text-secondary font-light text-sm leading-relaxed mt-3">
                  {e.detail}
                </p>
                <p className="text-frost/40 text-xs uppercase tracking-wider mt-4">
                  {e.date}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn
            delay={0.15}
            y={30}
            className="rounded-3xl border border-frost/15 bg-black-100 p-6 sm:p-8"
          >
            <p className="text-secondary uppercase tracking-[0.25em] text-[10px] font-light">
              Test scores
            </p>
            <div className="mt-6 flex flex-col divide-y divide-frost/10">
              {testScores.map((t) => (
                <div
                  key={t.label}
                  className="flex items-baseline justify-between gap-4 py-4 first:pt-0"
                >
                  <span className="text-frost/70 uppercase tracking-wider text-xs sm:text-sm">
                    {t.label}
                    {t.year && (
                      <span className="text-frost/35 ml-2 normal-case tracking-normal">
                        {t.year}
                      </span>
                    )}
                  </span>
                  <span
                    className="hero-heading font-black leading-none"
                    style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
                  >
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
