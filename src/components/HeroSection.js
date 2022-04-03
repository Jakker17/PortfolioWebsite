import React from 'react';
import '../App.css';
import './HeroSection.css';
import { Button }  from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="../public/videos/video-2.mp4" autoPlay loop muted/>
        <h1>Hey, I am Martin.</h1>
        <p>Welcome to my personal page. Here you can find my personal projects, blog and informations about me and my journey to become Software Developer.</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>About Me</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>My Github Account</Button>
        </div>
    </div>
  )
}

export default HeroSection