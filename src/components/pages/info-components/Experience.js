import React, { useState, useEffect } from "react";
import "./Experience.css";

function Experience() {
  const [smallerWindow, setSmallerWindow] = useState(false);

  const showSmaller = () => {
    if (window.innerWidth <= 960) {
      setSmallerWindow(true);
    } else {
      setSmallerWindow(false);
    }
  };

  useEffect(() => {
    showSmaller();
  }, []);

  window.addEventListener("resize", showSmaller);
  return (
    <>
      {!smallerWindow && (
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
                  <ul className="list-content ul-margin">
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
                  <ul className="list-content ul-margin">
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
      )}
      {smallerWindow && (
          <div className="experience-smaller">
            <div className="experience-header">
              <h1>Experience</h1>
              <div className="block-underline-smaller"></div>
            </div>
            <div className="experience-block">
              <h2>Skills</h2>
              <div className="experience-content">
                <div>
                  <ul className="list-content ul-margin">
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
                  <ul className="list-content ul-margin">
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
      )}
    </>
  );
}

export default Experience;
