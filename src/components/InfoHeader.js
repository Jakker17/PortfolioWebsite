import React, { useState, useEffect } from "react";
import "./InfoHeader.css";
import ProfilePicture from "../images/profile_picture.png";

function InfoHeader() {
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
        <div>
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="info">
            <div className="info-left">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam
                quis nulla. Integer vulputate sem a nibh rutrum consequat.
                Pellentesque ipsum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nullam dapibus
                fermentum ipsum. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit
              </p>
            </div>
            <div className="info-right">
              <img className="picture" src={ProfilePicture} alt="" />
            </div>
          </div>
          <div className="info-line"></div>
        </div>
      )}
      {smallerWindow && (
        <div>
          <div className="header">
            <h1>About Me</h1>
          </div>
          <div className="info-smaller">
            <div className="info-up">
              <img className="picture" src={ProfilePicture} alt="" />
            </div>
            <div className="info-down">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam
                quis nulla. Integer vulputate sem a nibh rutrum consequat.
                Pellentesque ipsum. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nullam dapibus
                fermentum ipsum. Nam libero tempore, cum soluta nobis est
                eligendi optio cumque nihil impedit
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoHeader;
