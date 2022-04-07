import React from "react";
import "./Footer.css";
import GithubIcon from "../logos/github_smaller.png";
import LinkedinIcon from "../logos/linkedin_smaller.png";
import NetlifyIcon from '../logos/netlify.png';
import GatsbyIcon from '../logos/gatsby.png';

function Footer() {
  return (
    <div className="footer app-light-menu">
      <div className="footer-container">
        <div className="footer-up">
          <p>Made by Martin Juroš ©
            All rights Reserved.
          </p>
           </div>
        <div className="footer-down">
          <div className="footer-lower-left">
            <a href="https://www.linkedin.com/in/martin-juroš-37b277224/">
              Linkedin 
              <img src={LinkedinIcon} alt="" className="footer-img"/>
            </a>
          </div>
          <div className="footer-lower-center">
            <a href="https://github.com/Jakker17">
              GitHub 
              <img src={GithubIcon} alt="" className="footer-img"/>
            </a>
          </div>
          <div className="footer-lower-right">
            <a href="https://www.netlify.com">
              Netlify
            <img src={NetlifyIcon} alt="" className="footer-img"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
