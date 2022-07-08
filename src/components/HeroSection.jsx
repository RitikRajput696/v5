import React from "react";
import HeroImg from "../images/hero-image.svg";

function HeroSection() {
  return (
    <section className="hero container">
      <article className="hero-text">
        <p>Hii, MY Name is</p>
        <h1>Ritik I am a </h1>
        <h1>Frontend Web Developer</h1>
        <div className="button-wrapper">
          <button className="button">Contact</button>
          <button className="button">Resume</button>
        </div>
      </article>
      <div className="hero-img">
        <div>
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
