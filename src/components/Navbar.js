import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import GithubIcon from "../logos/github_smaller.png";
import LinkedinIcon from "../logos/linkedin_smaller.png";
import MoonIcon from "../logos/moon_icon.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [iconsVisibility, setIconsVisibility] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showIcons = () => {
    if (window.innerWidth <= 960) {
      setIconsVisibility(false);
    } else {
      setIconsVisibility(true);
    }
  };

  useEffect(() => {
    showIcons();
  }, []);

  window.addEventListener("resize", showIcons);

  return (
    
      <div className="navbar app-light-menu">
        <div className="content">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Martin Juros <i class="fab fa-typo3"></i>
            </Link>
          </div>
          <div class="navbar-center">
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/info"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
            </ul>
          </div>
          {iconsVisibility && (
            <div className="navbar-right">
              <div className="navbar-icons">
                <div className="navbar-icons-icon">
                  <a href="https://github.com/Jakker17">
                    <img src={GithubIcon} alt="" />
                  </a>
                </div>
                <div className="navbar-icons-icon">
                  <a href="https://www.linkedin.com/in/martin-juroš-37b277224/">
                    <img src={LinkedinIcon} alt="" />{" "}
                  </a>
                </div>
                <div className="navbar-icons-icon">
                  <img src={MoonIcon} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
