import React from "react";
import Title from "../layouts/Title";

import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
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
          title="React Cohort Dashboard Challenge"
          des="This is  a social media app / dashboard react project that allows users to create posts and comment on existing posts
          Technologies used: 
          HTML,CSS,ReactJS"
          src={projectOne}
          link="https://cohort-dashboard-site.netlify.app/"
          github="https://github.com/Hayor4real/react-cohort-dashboard-challenge"
        />
        <ProjectsCard
          title="ECOMMERCE APPLICATION"
          des="This is a FullStack ecommerce project
          Users can search for specific product,browse through, view more info about specific product , add items to cart 
          Technologies used: 
          HTML,CSS,ReactJS,NodeJS,ExpressJS,MongoDB"
          src={projectTwo}
          link="https://my-ecommerce-application-website.onrender.com"
          github="https://github.com/Hayor4real/Fullstack-project-1"
        />
        <ProjectsCard
          title="CAR BOOKING APPLICATION"
          des="This is a fully react responsive car rental website design using mordern UI and UX using.
          Technologies used: 
          HTML,CSS,ReactJS"
          src={projectFour}
          link="https://car-booking-application-germany.onrender.com"
          github="https://github.com/Hayor4real/car-rental"
        />
        <ProjectsCard
          title=" React Address Book "
          des="This is a address book that allows a user to.
          1)A user can view a dashboard that displays a list of contacts
          2)A user can click a contact's name to view more details about that contact
          3)A user can create a contact via a form, accessed by clicking a Create a contact menu link
          Technologies used: 
          HTML,CSS,ReactJS"
          src={projectThree}
          link="https://address-book-site.netlify.app/"
          github="https://github.com/Hayor4real/react-address-book-part-2"
        />
      </div>
    </section>
  );
};

export default Projects;
