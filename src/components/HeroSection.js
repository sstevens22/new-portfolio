import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/myvideo.mov" autoPlay loop muted />
            <h1>A LITTLE BIT ABOUT MYSELF</h1>
            <p> Rapidly progressing fullstack developer.</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'> Contact Me!</Button>
            </div>
            
        </div>
    )
}

export default HeroSection
