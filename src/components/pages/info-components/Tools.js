import React from "react";
import "./Tools.css";

function Tools() {
  return (
    <div className="tools">
      <div className="tools-header">
        <h1>Tools</h1>
        <div className="block-underline"></div>
      </div>
      <div className="tools-block">
        <h2>Hardware</h2>
        <ul className="list-content">
          <li>
            <p className="bold-item">PC: </p> M1 MacBook Air 13" 2021 16GB RAM
          </li>
          <li>
            <p className="bold-item">Monitor: </p> TBD
          </li>
          <li>
            <p className="bold-item">Mouse: </p> TBD
          </li>
          <li>
            <p className="bold-item">Keyboard: </p> TBD
          </li>
          <li>
            <p className="bold-item">Headphones: </p> TBD
          </li>
        </ul>
      </div>
      <div className="tools-block">
          <h2>Software</h2>
          <ul className="list-content">
          <li>
            <p className="bold-item">Code: </p> Visual Studio Code
          </li>
          <li>
            <p className="bold-item">Back-end: </p> IntelliJ IDEA Ultimate
          </li>
          <li>
            <p className="bold-item">Database Management: </p> dBeaver/terminal
          </li>
          <li>
            <p className="bold-item">Notes: </p> Evernote
          </li>
          <li>
            <p className="bold-item">Browser: </p> Google Chrome
          </li>
          <li>
            <p className="bold-item">Browser: </p> Google Chrome
          </li>
            <p className="bold-item">Honorable mentions: </p> 
            <ul>
              <li>SourceTree</li>
              <li>Notepad++</li>
              <li>Postman</li>
            </ul>
          </ul>
      </div>
    </div>
  );
}

export default Tools;
