import React, { useState, useEffect, useContext } from "react";
import "./Contact.css";
import { ThemeContext } from "../../ThemeContext";
import {themes_secondary} from './theme-context-secondary-text';

function Contact() {
  const [smallerWindow, setSmallerWindow] = useState(false);
  const [theme, ] = useContext(ThemeContext);

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

  const getDefaultTheme = () => {
    if (theme === "light") {
      return themes_secondary.lightLink;
    }
    if (theme === "dimme") {
      return themes_secondary.dimmeLink;
    } else {
      return themes_secondary.darkLink;
    }
  };

  window.addEventListener("resize", showSmaller);

  return (
    <>
      {!smallerWindow && (
        <div className="content">
          <div className="contact">
            <div className="text">
              <div className="block-underline"></div>
              <h2 style={{ marginBottom: 10, marginTop: 100 }}>Contact</h2>
              <p>
                You can contact me via email, my linkedin or github profile. All
                of the mentioned will be below.
              </p>
            </div>
            <div className="contact-links">
              <ul className="list-content ul-margin">
                <li>
                  <a href="https://github.com/Jakker17" className="link" style={getDefaultTheme()}>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/martin-juroš-37b277224/"
                    className="link"
                    style={getDefaultTheme()}
                  >
                    Linkedin
                  </a>
                </li>
                <li>Email: jurosmartin97@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {smallerWindow && <div className="contact-smaller">
            <div className="text">
              <div className="block-underline-smaller"></div>
              <h2 style={{ marginBottom: 10, marginTop: 100 }}>Contact</h2>
              <p>
                You can contact me via email, my linkedin or github profile. All
                of the mentioned will be below.
              </p>
            </div>
            <div className="contact-links">
              <ul className="list-content ul-margin">
                <li>
                  <a href="https://github.com/Jakker17" className="link">
                    <p>Github</p>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/martin-juroš-37b277224/"
                    className="link"
                  >
                    Linkedin
                  </a>
                </li>
                <li>Email: jurosmartin97@gmail.com</li>
              </ul>
            </div>
          </div>}
    </>
  );
}

export default Contact;
