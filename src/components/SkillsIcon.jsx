import React from "react";
// import { images } from "../images";

function SkillsIcon() {
  return (
    <div className="skills-icon">
      <div className="icon">
        <img
          src={require("../images/icons8-html-5-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-css3-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-javascript-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-react-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-material-ui-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-sass-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-npm-144.png")}
          alt="html icon image"
        />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-github-144.png")}
          alt="html icon image"
        />
      </div>
    </div>
  );
}

export default SkillsIcon;
