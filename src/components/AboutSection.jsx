import React from "react";
import myIMage from "../images/ritikImage.png";
import RocketImage from "../images/rocketImage.svg";

function AboutSection() {
  return (
    <section className="AboutSection container">
      <div AboutSection-img>
        <img src={RocketImage} alt="" />
      </div>
      <div className="my-text-wrapper">
        <span class="text-green">02.</span>
        <span class="mid-heading">About Me</span>
        <p>
          Hello! My name is Ritik and I enjoy creating things that live on the
          internet. My interest in web development started back in
          <span class="text-green"> September 2021 </span>when my father gifted
          me a laptop and then i slowly started learning about
          <span class="text-green">WebDevelopment.</span>
        </p>
      </div>
      <div class="my-img">
        <img loading="lazy" src={myIMage} alt="" />
      </div>
      <div className="my-details-wrapper">
        <div class="my-details">
          <div class="about-me-field">
            <div class="field-name">Name:</div>
            <div class="field-name">Age:</div>
            <div class="field-name">Email:</div>
            <div class="field-name">Profession:</div>
            <div class="field-name">Address:</div>
            <div class="field-name">Pin Code:</div>
          </div>
          <div class="about-me-value">
            <div class="field-value">Ritik Rajput</div>
            <div class="field-value">19</div>
            <div class="field-value">ritikrajput1047@gmail.com</div>
            <div class="field-value">Frontend WebDeveloper</div>
            <div class="field-value">Bahadrabad, Haridwar, In</div>
            <div class="field-value">249402</div>
          </div>
        </div>
        <div className="skills">
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul class="skills-list">
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React Js</li>
            <li>Material UI</li>
            <li>SASS</li>
            <li>Node.js</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
