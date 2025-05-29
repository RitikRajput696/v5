import React from "react";

import myIMage from "../images/WhatsApp Image 2024-11-15 at 19.32.37.jpeg";
import RocketImage from "../images/rocketImage.png";
import SkillsIcon from "./SkillsIcon";
import { Fade } from "react-awesome-reveal";

function AboutSection() {
  return (
    <section className="AboutSection container" id="about">
      <div className="about-img">
        <img src={RocketImage} alt="rocket " />
      </div>
      <div className="my-text-wrapper">
        <div className="about-wrapper">
          <span className="text-green">02.</span>
          <h1>
            <span className="mid-heading">About Me</span>
          </h1>
        </div>
        <p>
          Hello! My name is Ritik and I enjoy creating things that live on the
          internet. My interest in web development started back in
          <span className="text-green"> September 2021 </span>when my father
          gifted me a laptop and then i slowly started learning about
          <span className="text-green"> Web Development.</span>
        </p>
      </div>
      <Fade>
        <div className="my-img">
          <img
            loading="lazy"
            src={myIMage}
            alt="ritik rajput "
            width={350}
            height={200}
          />
        </div>
      </Fade>
      <div className="my-details-wrapper">
        <div className="my-details">
          <div className="about-me-field">
            <div className="field-name">Name:</div>
            <div className="field-name">Email:</div>
            <div className="field-name">Profession:</div>
          </div>
          <div className="about-me-value">
            <div className="field-value">Ritik Rajput</div>
            <div className="field-value">rixusinput696@gmail.com</div>
            <div className="field-value">FullStack WebDeveloper</div>
          </div>
        </div>

        <div className="about-wrapper">
          <span className="text-green">03.</span>
          <h1>
            <span className="mid-heading">Skills</span>
          </h1>
        </div>

        <SkillsIcon />
      </div>
    </section>
  );
}

export default AboutSection;
