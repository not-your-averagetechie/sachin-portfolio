import React from "react";

/** Ghost/outline pill button used on project cards. */
const LiveProjectButton = ({ href, label = "Live Project", className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border-2 border-frost text-frost font-medium uppercase tracking-widest
        px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3.5
        text-xs sm:text-sm md:text-base whitespace-nowrap
        transition-colors duration-300 hover:bg-frost/10 ${className}`}
    >
      {label}
    </a>
  );
};

export default LiveProjectButton;
