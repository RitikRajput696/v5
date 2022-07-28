import React from "react";
import { Zoom } from "react-awesome-reveal";

function SkillsIcon() {
  return (
    <div className="skills-icon">
      <Zoom cascade damping={0.2}>
        <div className="icon">
          <img src={require("../images/icons8-html-5-144.png")} alt="html" />
        </div>
        <div className="icon">
          <img src={require("../images/icons8-css3-144.png")} alt="css " />
        </div>

        <div className="icon">
          <img
            src={require("../images/icons8-javascript-144.png")}
            alt="javascript icon"
          />
        </div>
        <div className="icon">
          <img src={require("../images/icons8-react-144.png")} alt="react " />
        </div>
        <div className="icon">
          <img
            src={require("../images/icons8-material-ui-144.png")}
            alt="material ui icon"
          />
        </div>
        <div className="icon">
          <img src={require("../images/icons8-sass-144.png")} alt="sass " />
        </div>
        <div className="icon">
          <img src={require("../images/icons8-npm-144.png")} alt="npm " />
        </div>
        <div className="icon">
          <img src={require("../images/icons8-github-144.png")} alt="github " />
        </div>
      </Zoom>
    </div>
  );
}

export default SkillsIcon;
