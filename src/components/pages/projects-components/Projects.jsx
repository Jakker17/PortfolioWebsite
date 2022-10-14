import React from "react";
import portfolio2 from "../../../images/portfolio2_1.png";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="content">
      <div className="projects-content">
        <h1>Projects</h1>
        <div className="projects-container">
          <ProjectCard img={portfolio2} />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
