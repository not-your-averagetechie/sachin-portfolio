import React, { useState } from "react";

/**
 * Supporting screenshots for a project card.
 *
 * Sources are plain /public URLs. Any file that isn't there yet is dropped, and
 * if none of them resolve the whole row unmounts — so screenshots can be added
 * later with no code change and nothing half-rendered shows in the meantime.
 */
const ProjectShots = ({ shots, name, className = "" }) => {
  const [broken, setBroken] = useState(() => new Set());

  const usable = (shots ?? []).slice(0, 2).filter((s) => !broken.has(s));
  if (!usable.length) return null;

  const markBroken = (src) =>
    setBroken((prev) => {
      const next = new Set(prev);
      next.add(src);
      return next;
    });

  return (
    <div
      className={`grid gap-3 md:gap-4 ${
        usable.length > 1 ? "grid-cols-2" : "grid-cols-1"
      } ${className}`}
    >
      {usable.map((src, i) => (
        <div
          key={src}
          className="group/shot relative overflow-hidden rounded-[18px] sm:rounded-[22px] border border-frost/15 bg-black-200"
        >
          <img
            src={src}
            alt={`${name} screenshot ${i + 1}`}
            loading="lazy"
            onError={() => markBroken(src)}
            className="w-full h-[84px] sm:h-[104px] md:h-[116px] object-cover
              transition-transform duration-500 group-hover/shot:scale-[1.07]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default ProjectShots;
