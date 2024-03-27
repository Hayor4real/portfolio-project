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
            des="Learned the fundamentals of full-stack web development through
            curated exercises and daily mentoring.
            Gained experience with modern web development technologies
            such as JavaScript, React, Prisma, PostgreSQL and Node.js.
            Worked collaboratively on real-world projects, improving problem solving and teamwork abilities.
            Worked collaboratively in a team development simulation exercise
            for 4 weeks. This was a cohort management application where I had
            the chance to work on both the front-end and back-end, adding new
            features by opening and closing tickets within GitHub.
            Learned industry best practices and coding standards, enhancing
            code quality and maintainability."
          />
          <ResumeCard
            title="Frontend Engineer(Internship) (April 2023 - June 2023)"
            subTitle="Hyundai Mobis Parts Europe N.V, Zweigniederlassung"
            result="Germany"
            des="Worked in an agile manner with daily stand-ups and bi-weekly
            sprints Contributed to the development of the UI of Oracle Code
            Technologies React.js, TypeScript, Redux, Bitbucket, GitLab(CI/CD),
            JIRA"
          />
          <ResumeCard
            title="UX/UI Design Basics Teaching Assistant(Volunteering)"
            subTitle="ReDi School of Digital Intergration"
            result="Germany"
            des="Taught the course to groups of students in English
            Collaborated with a team of volunteer-teachers
            Coordinated with the ReDI team to improve the courses and the
            student and teacher experience.
            Tracked student attendance and progress through the semester.
            "
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
