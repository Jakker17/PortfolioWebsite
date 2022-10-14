import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <a href="https://heroic-stroopwafel-4f3818.netlify.app">
        <img src={props.img} alt="" />
      </a>
    </div>
  );
};

export default ProjectCard;
