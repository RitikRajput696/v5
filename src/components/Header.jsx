import React from "react";

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
          <li>
            <a href="#" className="button">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
