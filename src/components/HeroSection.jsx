import React from 'react';
import HeroImg from '../images/hero-image.png';
import { Fade } from 'react-awesome-reveal';

function HeroSection() {
  return (
    <section className="hero container">
      <article className="hero-text">
        <p>Hii, MY Name is</p>
        <h1>Ritik I am a </h1>
        <h1>Frontend Web Developer</h1>
        <div className="button-wrapper">
          <a className="button" href="#contact" rel="noreferrer">
            <span>Contact</span>
          </a>
          <a
            className="button"
            href="https://drive.google.com/file/d/1AVcXIoc6FtcgRf3II_aOh-vtDXLIuS5x/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
          </a>
        </div>
      </article>

      <div className="hero-img">
        <Fade>
          <div>
            <img src={HeroImg} alt="a boy with computer" />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default HeroSection;
