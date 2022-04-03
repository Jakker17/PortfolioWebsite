import React from 'react';
import '../App.css';
import './HeroSection.css';
import videoBG from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={videoBG} autoPlay loop muted/>
        <h1>Hey, I am Martin.</h1>
        <p>Welcome to my personal page. Here you can find my personal projects, blog and informations about me and my journey to become Software Developer.</p>
    </div>
  )
}

export default HeroSection;