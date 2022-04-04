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
            <p className="bold-item">PC: </p> M1 MacBook Air 13" 2020 16GB RAM
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
              <li></li>
          </ul>
      </div>
    </div>
  );
}

export default Tools;
