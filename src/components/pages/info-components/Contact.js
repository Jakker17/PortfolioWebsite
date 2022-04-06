import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
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
                  <a href="https://github.com/Jakker17" className="link">
                    Github
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
                    Github
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
