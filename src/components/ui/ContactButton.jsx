import React from "react";

/** Gradient pill CTA — the signature accent of the design. */
const ContactButton = ({ label = "Contact Me", href = "#contact", className = "" }) => {
  return (
    <a
      href={href}
      className={`contact-gradient inline-block rounded-full text-white font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] ${className}`}
    >
      {label}
    </a>
  );
};

export default ContactButton;
