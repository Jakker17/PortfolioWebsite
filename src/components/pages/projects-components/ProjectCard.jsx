import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <a href={props.address}>
        <img src={props.img} alt="" />
      </a>
    </div>
  );
};

export default ProjectCard;
