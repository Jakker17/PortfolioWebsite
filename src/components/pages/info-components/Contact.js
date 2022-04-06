import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="content">
      <div className="contact">
        <div className="text">
        <div className="block-underline"></div>
          <h2 style={
            {marginBottom:10,
              marginTop: 100}
          }>Contact</h2>
          <p>
            You can contact me via email, my linkedin or github profile.
            All of the mentioned will be below.
          </p>
        </div>
        <div className="contact-links">
          <ul className="list-content">
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
  );
}

export default Contact;
