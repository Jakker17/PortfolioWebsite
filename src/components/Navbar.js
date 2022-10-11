import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GithubIcon from "../logos/github_smaller.png";
import LinkedinIcon from "../logos/linkedin_smaller.png";
import MoonIcon from "../logos/moon_icon.png";
import "./Navbar.css";
import { themes } from "./theme-context";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [iconsVisibility, setIconsVisibility] = useState(true);
  const [theme, setTheme] = useContext(ThemeContext);

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

  const onClickHandle = () => {
    if (theme === "dark") {
      setTheme("dimme");
    }
    if (theme === "dimme") {
      setTheme("light");
    }
    if (theme === "light") {
      setTheme("dark");
    }
  };

  useEffect(() => {
    showIcons();
  }, []);

  window.addEventListener("resize", showIcons);

  return (
    <div className="navbar" style={getTheme()}>
      <div className="content">
        <div className="navbar-container">
          <div className="navbar-left">
            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
              style={getTheme()}
            >
              Martin Juros <i class="fab fa-typo3"></i>
            </Link>
          </div>
          <div class="navbar-center" style={getTheme()}>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul
              className={click ? "nav-menu active" : "nav-menu"}
              style={getTheme()}
            >
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  style={getTheme()}
                >
                  <p style={getTheme()}>Projects</p>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/info"
                  className="nav-links"
                  onClick={closeMobileMenu}
                  style={getTheme()}
                >
                  <p style={getTheme()}>About Me</p>
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
                  <img src={MoonIcon} alt="" onClick={onClickHandle} />
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
