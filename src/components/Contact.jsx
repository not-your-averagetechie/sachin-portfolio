import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EarthCanvas } from "./canvas";
import CanvasGuard from "./ui/CanvasGuard";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { socialLinks } from "../constants";

const Contact = () => {
  const earthRef = useRef(null);
  // Only pay for the 3MB planet once the user is actually near it
  const earthInView = useInView(earthRef, { once: true, margin: "400px" });

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-black-100 border border-frost/10 p-8 rounded-3xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-tertiary border border-frost/10 rounded-2xl p-4 cursor-pointer
                hover:border-accent/60 hover:bg-accent/10 transition-colors duration-300"
            >
              {social.iconText ? (
                <span className="w-8 h-8 flex items-center justify-center text-frost text-xl shrink-0">
                  {social.iconText}
                </span>
              ) : (
                <img
                  src={social.icon}
                  alt=""
                  className="w-8 h-8 object-contain shrink-0"
                  style={social.iconInvert ? { filter: "invert(1)" } : undefined}
                />
              )}
              <div>
                <h3 className="text-frost text-[17px] font-semibold">
                  {social.name}
                </h3>
                {social.display && (
                  <p className="text-secondary text-[14px]">{social.display}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={earthRef}
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[550px] md:h-[550px] h-[350px]"
      >
        {earthInView && (
          <CanvasGuard>
            <EarthCanvas />
          </CanvasGuard>
        )}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
