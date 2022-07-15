import React from "react";
import CardList from "./ProjectCard";
// import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <section className="ProjectSection container" id="projects">
      <div className="ProjectSection-text">
        <span className="text-green">03.</span>
        <h1>MY PROJECTS</h1>
      </div>
      <CardList />
    </section>
  );
}

export default ProjectSection;
