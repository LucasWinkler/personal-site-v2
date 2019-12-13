import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section id='hero' className='hero'>
      <div className='container'>
        <h2 className='sub-headline'>
          <span className='first-letter'>W</span>elcome
        </h2>
        <h1 className='headline'>Lucas Winkler</h1>
        <div className='headline-description'>
          <div className='seperator'>
            <div className='line line-left'></div>
            <div className='asterik'>
              <FontAwesomeIcon icon={faAsterisk} />
            </div>
            <div className='line line-right'></div>
            <div className='single-animation'>
              <h5>Ready to be opened</h5>
              <a href='/cta' className='btn btn-cta'>
                CTA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
