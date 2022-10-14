import React, { useEffect, useState } from "react";
import "./Tools.css";

function Tools() {
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
          <div className="tools">
            <div className="tools-header layout">
              <h1>Tools</h1>
              <div className="block-underline"></div>
            </div>
            <div className="tools-block layout">
              <h2>Hardware</h2>
              <ul className="list-content ul-margin">
                <li>
                  <p className="bold-item">PC: </p> M1 MacBook Air 13" 2021 16GB
                  RAM
                </li>
                <li>
                  <p className="bold-item">Monitor: </p> Dell Gaming S3422DWG
                  34"
                </li>
                <li>
                  <p className="bold-item">Mouse: </p> Logitech G305 Lightspeed
                  Wireless
                </li>
                <li>
                  <p className="bold-item">Keyboard: </p> Logitech G512 SE US
                </li>
                <li>
                  <p className="bold-item">Headphones: </p> Logitech G935
                  Wireless
                </li>
              </ul>
            </div>
            <div className="tools-block">
              <h2>Software</h2>
              <ul className="list-content ul-margin">
                <li>
                  <p className="bold-item">Code: </p> Visual Studio Code
                </li>
                <li>
                  <p className="bold-item">Back-end: </p> IntelliJ IDEA Ultimate
                </li>
                <li>
                  <p className="bold-item">Database Management: </p> dBeaver /
                  Terminal / IDEA
                </li>
                <li>
                  <p className="bold-item">Containers: </p> Docker
                </li>
                <li>
                  <p className="bold-item">Notes: </p> Evernote / Notion
                </li>
                <li>
                  <p className="bold-item">Browser: </p> Google Chrome / Safari
                </li>
                <li>
                  <p className="bold-item">Honorable mentions: </p>
                  <ul className="list-content ul-margin">
                    <li>GIT - IDEA</li>
                    <li>Notepad++</li>
                    <li>Postman</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {smallerWindow && (
        <div className="tools-smaller">
          <div className="tools-header layout">
            <h1>Tools</h1>
            <div className="block-underline-smaller"></div>
          </div>
          <div className="tools-block layout">
            <h2>Hardware</h2>
            <ul className="list-content ul-margin">
              <li>
                <p className="bold-item">PC: </p> M1 MacBook Air 13" 2021 16GB
                RAM
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
            <ul className="list-content ul-margin">
              <li>
                <p className="bold-item">Code: </p> Visual Studio Code
              </li>
              <li>
                <p className="bold-item">Back-end: </p> IntelliJ IDEA Ultimate
              </li>
              <li>
                <p className="bold-item">Database Management: </p> dBeaver /
                Terminal / IDEA
              </li>
              <li>
                <p className="bold-item">Database Management: </p> dBeaver /
                Terminal / IDEA
              </li>
              <li>
                <p className="bold-item">Notes: </p> Evernote / Notion
              </li>
              <li>
                <p className="bold-item">Browser: </p> Google Chrome / Safari
              </li>
              <li>
                <p className="bold-item">Honorable mentions: </p>
                <ul className="list-content ul-margin">
                  <li>GIT - IDEA</li>
                  <li>Notepad++</li>
                  <li>Postman</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Tools;
