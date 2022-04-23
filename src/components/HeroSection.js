import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="content">
      <div className="hero-container">
        <h1>Hey, I am Martin.</h1>
        <p>
          Welcome to my personal page. Here you can find my personal projects,
          blog and informations about me and my journey to become Software
          Developer.
        </p>

        <h2 style={{marginTop:300,
        fontSize:30}}>Work in progress: </h2>
        <ul>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
