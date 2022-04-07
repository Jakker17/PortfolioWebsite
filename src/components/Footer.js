import React, { useState, useContext } from "react";
import "./Footer.css";
import GithubIcon from "../logos/github_smaller.png";
import LinkedinIcon from "../logos/linkedin_smaller.png";
import NetlifyIcon from "../logos/netlify.png";
import GatsbyIcon from "../logos/gatsby.png";
import { themes } from "./theme-context";
import { ThemeContext } from "./ThemeContext";

function Footer() {
  const [theme, ] = useContext(ThemeContext);

  const getTheme = () => {
    if (theme === "light") {
      return themes.light;
    }
    if (theme === "dimme") {
      return themes.dimme;
    } else {
      return themes.dark;
    }
  };

  return (
    <div className="footer" style={getTheme()}>
      <div className="footer-container">
        <div className="footer-up">
          Made by Martin Juroš © All rights Reserved.
        </div>
        <div className="footer-down">
          <div className="footer-lower-left">
            <a
              href="https://www.linkedin.com/in/martin-juroš-37b277224/"
              style={getTheme()}
            >
              Linkedin
              <img src={LinkedinIcon} alt="" className="footer-img" />
            </a>
          </div>
          <div className="footer-lower-center">
            <a href="https://github.com/Jakker17" style={getTheme()}>
              GitHub
              <img src={GithubIcon} alt="" className="footer-img" />
            </a>
          </div>
          <div className="footer-lower-right">
            <a href="https://www.netlify.com" style={getTheme()}>
              Netlify
              <img src={NetlifyIcon} alt="" className="footer-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
