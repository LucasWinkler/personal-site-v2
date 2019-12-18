import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroData from '../data/hero';

function Hero() {
  return (
    <section id='section-hero' className='section-hero'>
      <div className='container'>
        <div className='hero-content'>
          <h2 className='hero-title'>{heroData.title}</h2>
          <p className='hero-subtitle'>{heroData.subtitle}</p>
          <button className={heroData.btnResume.style}>
            <FontAwesomeIcon
              icon={heroData.btnResume.icon}
              className='btn-icon'
            />
            {heroData.btnResume.text}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
