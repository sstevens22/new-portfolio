import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Send me a message and I will get back to you soon!
        </p>
        <p className='footer-subscription-text'>
          Be sure to add your contact details!
        </p>
        <div className='input-areas'>
          <form>
            
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Sheldon Mitchell
              <i class='fas fa-camera' />
            </Link>
          </div>
          <small class='website-rights'>Sheldon Mitchell © 2021</small>
          <div class='social-icons'>
          <a
					href="https://github.com/sstevens22"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fab fa-github' />
				</a>
        <a
					href="https://www.instagram.com/shellnshenanigans/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fab fa-instagram' />
				</a>
        <a
					href="https://www.youtube.com/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fab fa-youtube' />
				</a>
        <a
					href="https://twitter.com/home"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fab fa-twitter' />
				</a>
        <a
					href="https://www.linkedin.com/in/sheldon-stevens-229858124/"
					target="_blank"
					rel="blank"
          class='social-icon-link'
				>
          <i class='fab fa-linkedin' />
				</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;