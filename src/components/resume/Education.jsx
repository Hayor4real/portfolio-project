import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            My Education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="UX/UI Design Basics"
            subTitle="Redi School of Digital Integration (March 2023 - July 2023)"
            result="project done"
            des="The goal is to learn the fundamental of UX Design as a frontend developer"
          />
          <ResumeCard
            title="React"
            subTitle="Redi School of digital Intergration dusseldorf Germany (September 2022 - December 2022)"
            result="project done"
            des="The goal of the course was to teach fundamental React concepts and advanced software techniques of a modern application."
          />

          <ResumeCard
            title="JavaScripts"
            subTitle="Redi School of digital Intergration dusseldorf Germany(April 2022 - June 2022)"
            result="project done"
            des="The goal of the course was to teach fundamental JavaScripts concepts and advanced software techniques of a modern application"
          />
          <ResumeCard
            title="Metallurgical and materials Engineering"
            subTitle="University of Lagos Nigeria - (2010 - 2016)"
            result="Bachelor thesis done"
            des="various aspects of metals and the identification and unearthing of metals within the ground"
          />
        </div>
      </div>
      {/* part two */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010-2016</p>
          <h2 className="text-3xl md:text-4xl font-bold ">
            Univerisity Attended
          </h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 gap-10"></div>
      </div>
    </motion.div>
  );
};

export default Education;
