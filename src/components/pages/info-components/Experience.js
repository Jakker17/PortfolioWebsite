import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="content">
      <div className="experience">
        <div className="experience-header">
          <h1>Experience</h1>
          <div className="block-underline"></div>
        </div>
        <div className="experience-block">
          <h2>Skills</h2>
          <div className="experience-content">
            <div>
              <ul className="list-content">
                <li>English/Czech</li>
                <li>Software Development</li>
                <li>Web Development</li>
                <li>Windows 7/10</li>
                <li>Basic Linux/Windows Scripting</li>
                <li>Basic Docker containering</li>
                <li>Basic to Advanced knowledge of Kafka</li>
                <li>Fast Learner</li>
                <li>Databases: Oracle SQL, PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="experience-block">
          <h2>Programming languages</h2>
          <div className="experience-content">
            <div>
              <ul className="list-content">
                <li>Java</li>
                <li>Spring Framework</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
