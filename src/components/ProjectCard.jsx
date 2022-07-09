import React from "react";
import ClockImg from "../images/analog-clock-img.png";

function ProjectCard() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={ClockImg} alt="" />
      </div>
      <div className="card-text">
        <h2>Project Name</h2>
        <div className="card-labels">
          <code>HTML</code>
          <code>CSS</code>
          <code>REACT</code>
        </div>
        <div className="card-bottom">
          <a href="#">LIVE</a>
          <a href="#">SOURCE CODE</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
