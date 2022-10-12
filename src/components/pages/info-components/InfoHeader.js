import React, { useEffect, useState } from "react";
import ProfilePicture from "../../../images/profile_picture.png";
import "./InfoHeader.css";

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
        <div className="content">
          <div className="infoHeader">
            <div className="header">
              <h1>About Me</h1>
            </div>
            <div className="info">
              <div className="info-left">
                <p>
                  Hello my name is Martin. I am junior software developer at
                  Ness corporation. I also study for masters degree at Tomas
                  Bata University. I mostly develop web apps.
                </p>
                <br />
                <p>
                  I prefer developing back-end parts of applications, such as
                  Rest / SOAB api's. My main programming language is Java
                  together with spring boot framework.
                </p>
                <br />
                <p>
                  But I don't really mind even programming websites using
                  React.js and Next.js with Tailwindcss.
                </p>
              </div>
              <div className="info-right">
                <img className="picture" src={ProfilePicture} alt="" />
              </div>
            </div>
            <div className="info-line"></div>
          </div>
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
                Hello my name is Martin. I am junior software developer at Ness
                corporation. I also study for masters degree at Tomas Bata
                University. I mostly develop web apps. I prefer developing
                back-end parts of applications, such as Rest / SOAB api's. My
                main programming language is Java together with spring boot
                framework. But I don't really mind even programming websites
                using React.js and Next.js with Tailwindcss.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoHeader;
