import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative inline">
      {/* real, selectable text (dimmed) */}
      <span className="opacity-[0.15]">{char}</span>
      {/* decorative animated overlay */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none"
        aria-hidden="true"
      >
        {char}
      </motion.span>
    </span>
  );
};

/**
 * Character-by-character scroll-reveal paragraph.
 * Words stay whole (inline-block) so wrapping never splits mid-word.
 */
const AnimatedText = ({ text, className = "", style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const total = text.length;
  let count = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split("").map((char, ci) => {
          const start = count / total;
          count += 1;
          const end = Math.min((count + 6) / total, 1);
          return (
            <Char
              key={`c-${wi}-${ci}`}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });
        count += 1; // account for the space between words
        return (
          <span key={`w-${wi}`} className="inline-block whitespace-pre">
            {chars}
            {wi < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
