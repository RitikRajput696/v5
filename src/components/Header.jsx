import React from "react";
import Github from "../images/github.svg";
import Twitter from "../images/twitter.svg";

function Header() {
  return (
    <header>
      <nav className="container">
        <h1 className="logo">Ritik Rajput</h1>
        <ul className="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="icons">
            <a href="https://www.github.com/ritikrajput696">
              <img src={Github} alt="" />
            </a>
          </li>
          <li className="icons">
            <a href="https://www.twitter.com/ritikrajput696">
              <img src={Twitter} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
