import React from "react";
import Title from "../layouts/Title";

import { projectOne } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit My PORTFOLIO AND LET ME KNOW YOUR FEEDBACK"
          des="My Personal Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="CAR BOOKING APPLICATION"
          des="This is a fully react responsive car rental website design using mordern UI and UX using.
          Technologies used: 
          HTML,CSS,ReactJS"
          src={projectOne}
          link="https://car-booking-application-germany.onrender.com"
          github="https://github.com/Hayor4real/car-rental"
        />
      </div>
    </section>
  );
};

export default Projects;
