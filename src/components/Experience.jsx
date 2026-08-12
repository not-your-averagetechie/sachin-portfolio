import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#101318",
        color: "#D7E2EA",
        border: "1px solid rgba(215, 226, 234, 0.12)",
        boxShadow: "none",
        borderRadius: "24px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(215, 226, 234, 0.12)" }}
      date={experience.date}
      iconStyle={{ 
        background: experience.iconBg, 
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "32px",
        height: "32px"
      }}
      icon={
        <div className='flex justify-center items-center w-8 h-8'>
          {experience.iconText ? (
            <span
              className='w-8 h-8 flex items-center justify-center rounded text-white font-black text-[17px]'
              style={{
                background:
                  "linear-gradient(123deg, #18011F 7%, #B600A8 55%, #BE4C00 100%)",
              }}
            >
              {experience.iconText}
            </span>
          ) : (
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-8 h-8 object-contain'
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-frost text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Product · AI · Teaching · Founding
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
