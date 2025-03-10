import React from "react";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialLinks } from "../constants";

const Contact = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-10 flex flex-col gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-tertiary rounded-lg p-4 cursor-pointer hover:bg-[#915EFF] transition-colors duration-300"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-8 h-8 object-contain"
              />
              <div>
                <h3 className="text-white text-[18px] font-bold">
                  {social.name}
                </h3>
                {social.display && (
                  <p className="text-secondary text-[14px]">
                    {social.display}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[550px] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
