import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { projects, featuredProjectNames } from "../constants";
import FadeIn from "./ui/FadeIn";
import LiveProjectButton from "./ui/LiveProjectButton";
import ProjectVisual from "./ui/ProjectVisual";
import ProjectVideo from "./ui/ProjectVideo";
import ProjectShots from "./ui/ProjectShots";

const featured = featuredProjectNames
  .map((meta) => {
    const project = projects.find((p) => p.name.trim() === meta.name);
    return project ? { ...project, ...meta } : null;
  })
  .filter(Boolean);

const rest = projects.filter(
  (p) => !featuredProjectNames.some((meta) => meta.name === p.name.trim())
);

/**
 * One sticky-stacking card (md+). Scales down slightly as the next card
 * arrives. On small screens the cards flow normally — content there is
 * taller than the viewport, so pinning would clip it.
 */
const StackCard = ({ project, index, total, progress, isDesktop }) => {
  // Reference-design stack animation: cards pin and scale down as the next
  // one arrives — targetScale = 1 - (total - 1 - index) * 0.03.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    // The h-[85vh] wrapper itself is sticky: its containing block is the whole
    // stack, so each card pins at top-32 and the next cards slide up OVER it —
    // the reference design's overlap. (Nesting the sticky element inside the
    // 85vh box instead kills the effect: it can only travel ~50px within its
    // own parent.)
    <div className="snap-card md:h-[85vh] flex items-start justify-center md:sticky md:top-32 mb-8 md:mb-0">
        <motion.div
        style={isDesktop ? { scale, top: `${index * 28}px` } : {}}
        className="relative w-full max-w-7xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border-2 border-frost bg-primary p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* top row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 px-2 sm:px-4 pt-2 pb-4 sm:pb-6">
          <span
            className="hero-heading font-black leading-none"
            style={{ fontSize: "clamp(2.6rem, 7vw, 100px)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 min-w-[180px]">
            <p className="text-secondary uppercase tracking-[0.25em] text-[10px] sm:text-xs font-light">
              {project.category}
            </p>
            <h3
              className="text-frost font-semibold uppercase tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.4rem, 3.4vw, 3rem)" }}
            >
              {project.name.trim()}
            </h3>
          </div>
          <LiveProjectButton href={project.source_code_link} />
        </div>

        {/* Bottom row. Side-by-side from lg up: the 16:9 media column is the
            single height authority (same width % everywhere → same height
            everywhere), so every card in the stack comes out identical. The
            text panel is absolutely positioned and clipped — copy is written
            to fit, never scrolled. Below lg the columns stack naturally. */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
          <div className="lg:w-[38%] relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-frost/15 bg-black-100">
            <div className="lg:absolute lg:inset-0 lg:overflow-hidden flex flex-col justify-between gap-4 p-6 sm:p-7">
            <div className="flex flex-col gap-4">
              <p
                className="text-frost/85 font-light leading-normal"
                style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.125rem)" }}
              >
                {project.description}
              </p>

              {/* how it's actually built — compact single-line entries so the
                  panel never needs a scrollbar (hidden below xl, where the
                  panel is shorter) */}
              {project.highlights && (
                <ul className="hidden xl:flex flex-col gap-y-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h.label}
                      className="border-l border-accent/50 pl-3 text-[13px] leading-snug"
                    >
                      <span className="text-frost font-medium uppercase tracking-wider text-[11px]">
                        {h.label}
                      </span>
                      <span className="text-secondary font-light"> — {h.body}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <p className="text-frost font-medium uppercase tracking-wider text-sm sm:text-[15px] mb-3">
                {project.stat}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.name}-${tag.name}`}
                    className="rounded-full border border-frost/20 text-frost/70 px-3 py-1 text-[11px] sm:text-xs uppercase tracking-wider"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </div>
          {/* media column: showreel video when there is one, otherwise the
              project visual — with supporting screenshots underneath */}
          <div className="lg:w-[62%] relative z-10 flex flex-col justify-center gap-3 lg:gap-4">
            {/* 16:9 box matches the clip's native ratio, so object-cover has
                nothing to crop and the frame reads at full width. */}
            {project.video ? (
              <ProjectVideo
                src={project.video}
                label={`${project.name.trim()} · Live demo`}
                className="w-full aspect-video
                  rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-frost/15"
              />
            ) : (
              <ProjectVisual
                project={project}
                className="w-full aspect-video
                  rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-frost/15"
              />
            )}
            <ProjectShots shots={project.shots} name={project.name.trim()} />
          </div>
        </div>
        </motion.div>
    </div>
  );
};

const MiniCard = ({ project, index }) => (
  <FadeIn
    delay={(index % 3) * 0.08}
    y={30}
    className="group rounded-3xl border border-frost/15 bg-black-100 overflow-hidden
      hover:border-frost/40 transition-colors duration-300"
  >
    <a
      href={project.source_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="overflow-hidden">
        <ProjectVisual
          project={project}
          className="w-full h-[180px] group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h4 className="text-frost font-semibold uppercase tracking-wide text-base">
          {project.name.trim()}
        </h4>
        <p className="text-secondary font-light text-sm leading-relaxed mt-2 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={`${project.name}-${tag.name}`}
              className="text-[10px] uppercase tracking-wider text-frost/50 border border-frost/15 rounded-full px-2.5 py-0.5"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  </FadeIn>
);

/**
 * Dark sheet that slides over the white Services section.
 * Featured work stacks & scales on scroll; the rest sit in a compact grid.
 */
const Projects = () => {
  const stackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-primary rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 z-10 px-4 sm:px-6 md:px-10 pt-16 sm:pt-20 md:pt-24 pb-20 scroll-mt-[90px]"
    >
      <FadeIn as="h2" y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </FadeIn>
      <p className="text-center text-secondary uppercase tracking-[0.3em] text-[10px] sm:text-xs font-light mb-10 sm:mb-14">
        Flagship work — scroll through the stack
      </p>

      <div ref={stackRef} className="relative">
        {featured.map((project, i) => (
          <StackCard
            key={project.name}
            project={project}
            index={i}
            total={featured.length}
            progress={scrollYProgress}
            isDesktop={isDesktop}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-20 sm:mt-28">
        <FadeIn y={30}>
          <h3 className="text-frost font-semibold uppercase tracking-wide text-xl sm:text-2xl mb-8">
            More builds
          </h3>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <MiniCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
