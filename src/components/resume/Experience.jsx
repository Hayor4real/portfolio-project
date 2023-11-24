import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2020- present
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer (Training) (August 2023 - March 2024)"
            subTitle="Boolean UK"
            result="United Kingdom"
            des="Learned the fundamentals of full stack web development with curated exercises and mentoring daily."
          />
          <ResumeCard
            title="Frontend Engineer(Internship) (April 2023 - June 2023)"
            subTitle="Hyundai Mobis Parts Europe N.V, Zweigniederlassung"
            result="Germany"
            des="Implement frontend components and services, especially for image segmentation
            editing"
          />
          <ResumeCard
            title="UX/UI Design Basics Teaching Assistant(Volunteering)"
            subTitle="ReDi School of Digital Intergration"
            result="Germany"
            des="Coordinated with the ReDI team to improve the courses and the student and
            teacher experience."
          />

          <ResumeCard
            title=" Internship ( febuary 2017 -  febuary 2018)"
            subTitle="Iron steel International company"
            result="Nigeria"
            des="Installation of car port of different styles, sizes for swimming pool rest cover and door way shade beautification"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
