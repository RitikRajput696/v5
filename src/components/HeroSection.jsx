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
          <button className="button">
            <span>Contact</span>
          </button>
          <button className="button">
            <span>Resume</span>
          </button>
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
