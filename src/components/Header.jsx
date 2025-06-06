import React from "react";

function Header() {
  // hide nav when click on links
  function hideNav() {
    const hamBtn = document.querySelector(".hamburger");
    document.querySelector(".nav-links").classList.toggle("active");
    hamBtn.classList.remove("is-active");
  }
  // toggle hamburger animation and navlinks display block and none
  function toggleNav() {
    const hamBtn = document.querySelector(".hamburger");
    hamBtn.classList.toggle("is-active");
    document.querySelector(".nav-links").classList.toggle("active");
  }

  return (
    <header>
      <nav className="container">
        <h1 className="logo">
          Ritik Rajput
          <button
            className=" ham hamburger hamburger--slider"
            type="button"
            onClick={toggleNav}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </h1>
        <ul className="nav-links">
          <li>
            <a href="#about" rel="noreferrer" onClick={hideNav}>
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" rel="noreferrer" onClick={hideNav}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" rel="noreferrer" onClick={hideNav}>
              Contact
            </a>
          </li>
          <li className="icons">
            <a
              href="https://www.github.com/ritikrajput696"
              target="_blank"
              rel="noreferrer"
              onClick={hideNav}
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                viewBox="0 0 1024 1024"
                height="2rem"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
              </svg>
            </a>
          </li>
          <li className="icons">
            <a
              href="https://twitter.com/ritik_696"
              target="_blank"
              rel="noreferrer"
              onClick={hideNav}
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                viewBox="0 0 1024 1024"
                height="2rem"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
