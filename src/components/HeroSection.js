import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';



function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
        <h1>Mi Ranchito Classic Mexican Food & Drink</h1>
        <p>Come check us out today!</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='/menu'>
                See Menu
            </Button>
        </div>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' path='/contact-us'>
                Order Over the Phone <i className='far fas fa-phone'/>
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;