import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  return (
    <section className="ProjectSection container">
      <h1>MY PROJECTS</h1>
      <div className="project-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default ProjectSection;
