import React from "react";
import myIMage from "../images/ritikImage.png";

function AboutSection() {
  return (
    <section className="AboutSection container">
      <div my-info>
        <span class="text-green">02.</span>
        <span class="mid-heading">About Me</span>
        <p>
          Hello! My name is Ritik and I enjoy creating things that live on the
          internet. My interest in web development started back in
          <span class="text-green"> September 2021 </span>when my father gifted
          me a laptop and then i slowly started learning about
          <span class="text-green">Webdevelopment.</span>
        </p>{" "}
        <div class="my-img">
          <img src={myIMage} alt="" />
        </div>
        <div class="my-details">
          <div class="about-me-field">
            <div class="field-name">Name:</div>
            <div class="field-name">Age:</div>
            <div class="field-name">Email:</div>
            <div class="field-name">Address:</div>
            <div class="field-name">Pin Code:</div>
          </div>
          <div class="about-me-value">
            <div class="field-value">Ritik Rajput</div>
            <div class="field-value">18</div>
            <div class="field-value">rixusinput696@gmail.com</div>
            <div class="field-value">Bahadrabad, Haridwar, In</div>
            <div class="field-value">249402</div>
          </div>
        </div>
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
    </section>
  );
}

export default AboutSection;
