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
        <img src={require("../images/icons8-css3-144.png")} alt="css icon" />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-javascript-144.png")}
          alt="javascript icon"
        />
      </div>
      <div className="icon">
        <img src={require("../images/icons8-react-144.png")} alt="react icon" />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-material-ui-144.png")}
          alt="material ui icon"
        />
      </div>
      <div className="icon">
        <img src={require("../images/icons8-sass-144.png")} alt="sass icon" />
      </div>
      <div className="icon">
        <img src={require("../images/icons8-npm-144.png")} alt="npm icon" />
      </div>
      <div className="icon">
        <img
          src={require("../images/icons8-github-144.png")}
          alt="github icon"
        />
      </div>
    </div>
  );
}

export default SkillsIcon;
