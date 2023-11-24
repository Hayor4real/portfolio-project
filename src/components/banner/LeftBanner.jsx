import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaReact,
  FaLinkedinIn,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [" Coder.", "Frontend Developer.", "Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Akindele Ayorinde Emmanuel
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a frontend developer/ engineer. I am looking for interesting
          challenges and opportunities to be a part of part solution and develop
          digital solutions to everyday problems and can easily pick up and
          apply new technologies. I enjoy working collaboratively but can also
          work independently as I am self motivated.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/yellow.ay" target="_blank">
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://github.com/Hayor4real?tab=repositories"
                target="_blank"
              >
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/akindele-ayorinde-773849176"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>

            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3Alt />
            </span>
            <span className="bannerIcon">
              <FaJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
