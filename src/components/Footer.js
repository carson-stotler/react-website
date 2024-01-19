import React from 'react'
import { Button } from './Button'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form>
                    <input className='footer-input' type='email' name='email' placeholder='Your Email'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/about-us'>Who We Are</Link>
                    <Link to='/'>Reviews</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/contact-us'>Contact</Link>
                    <Link to='/'>Call</Link>
                    <Link to='/'>E-mail</Link>
                    {/* <Link to='/'>Sponsorships</Link> */}
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Photos</h2>
                    <Link to='/'>Photo Catalog</Link>
                    <Link to='/'>Submit Photo</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    {/* <Link to='/'>Instagram</Link> */}
                    <Link to='https://www.facebook.com/miranchitomx/'>Facebook</Link>
                    {/* <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link> */}
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        Mi Ranchito Mexican Restaurant
                        <i class='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'>
                    TRVL 2020
                </small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook'></i>
                    </Link>
                    <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                        <i className='fab fa-youtube'></i>
                    </Link>
                    <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='LinkedIn'>
                        <i className='fab fa-linkedin'></i>
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer