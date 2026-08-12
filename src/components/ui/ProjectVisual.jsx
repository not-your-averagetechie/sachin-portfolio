import React from "react";

/**
 * Workflow-canvas motif (n8n-style): trigger node branching into two agent
 * nodes, drawn as an SVG overlay with packets travelling the wires. Used by
 * automation projects that have no screenshot — reads as "this is an agent
 * pipeline" at a glance.
 */
const WorkflowPattern = ({ accent = "#EA4B71" }) => (
  <svg
    viewBox="0 0 400 240"
    preserveAspectRatio="xMidYMid slice"
    className="absolute inset-0 w-full h-full"
    aria-hidden="true"
  >
    {/* connectors */}
    <path d="M96 120 H156" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
    <path d="M226 120 C 258 120, 258 66, 290 66" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />
    <path d="M226 120 C 258 120, 258 174, 290 174" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" />

    {/* trigger node (round) */}
    <circle cx="68" cy="120" r="28" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    <path d="M62 108 L62 132 L80 120 Z" fill={accent} />

    {/* main agent node */}
    <rect x="156" y="94" width="70" height="52" rx="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.7)" strokeWidth="2" />
    <circle cx="175" cy="120" r="5" fill={accent} className="animate-pulse" />
    <rect x="188" y="112" width="26" height="4" rx="2" fill="rgba(255,255,255,0.55)" />
    <rect x="188" y="122" width="18" height="4" rx="2" fill="rgba(255,255,255,0.35)" />

    {/* branch nodes */}
    <rect x="290" y="42" width="62" height="48" rx="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
    <circle cx="307" cy="66" r="4.5" fill={accent} className="animate-pulse" style={{ animationDelay: "0.4s" }} />
    <rect x="318" y="58" width="22" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
    <rect x="318" y="68" width="15" height="4" rx="2" fill="rgba(255,255,255,0.3)" />

    <rect x="290" y="150" width="62" height="48" rx="12" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
    <circle cx="307" cy="174" r="4.5" fill={accent} className="animate-pulse" style={{ animationDelay: "0.8s" }} />
    <rect x="318" y="166" width="22" height="4" rx="2" fill="rgba(255,255,255,0.5)" />
    <rect x="318" y="176" width="15" height="4" rx="2" fill="rgba(255,255,255,0.3)" />

    {/* packets travelling the wires */}
    <circle r="3.5" fill="#ffffff">
      <animateMotion dur="2.4s" repeatCount="indefinite" path="M96 120 H156" />
    </circle>
    <circle r="3" fill="#ffffff" opacity="0.9">
      <animateMotion dur="2.8s" repeatCount="indefinite" begin="0.6s" path="M226 120 C 258 120, 258 66, 290 66" />
    </circle>
    <circle r="3" fill="#ffffff" opacity="0.9">
      <animateMotion dur="2.8s" repeatCount="indefinite" begin="1.4s" path="M226 120 C 258 120, 258 174, 290 174" />
    </circle>
  </svg>
);

/**
 * A project's visual: a screenshot when we have one, otherwise a generated
 * gradient plate with the project's wordmark (and an optional workflow motif).
 * Keeps image-less projects looking deliberate.
 */
const ProjectVisual = ({ project, className = "", style }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name.trim()}
        loading="lazy"
        className={`object-cover ${className}`}
        style={style}
      />
    );
  }

  const hasPattern = project.pattern === "workflow";

  return (
    <div
      className={`relative overflow-hidden ${
        hasPattern ? "flex items-end justify-start" : "flex items-center justify-center"
      } ${className}`}
      style={{ ...style, background: project.gradient }}
      role="img"
      aria-label={project.name.trim()}
    >
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {hasPattern && <WorkflowPattern accent={project.patternAccent} />}

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />

      <span
        className={`relative text-white font-black uppercase tracking-tight leading-none drop-shadow-lg ${
          hasPattern ? "px-5 pb-4 text-left" : "px-6 text-center"
        }`}
        style={{
          fontSize: hasPattern
            ? "clamp(1rem, 2.2vw, 1.7rem)"
            : "clamp(1.6rem, 4.5vw, 3.6rem)",
        }}
      >
        {project.glyph || project.name.trim()}
      </span>
    </div>
  );
};

export default ProjectVisual;
