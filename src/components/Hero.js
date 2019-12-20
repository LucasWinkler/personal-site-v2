import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import heroData from '../data/hero';

function Hero() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setScrollOffset(document.getElementById('header').offsetHeight);
  }, [scrollOffset]);

  return (
    <section id='section-hero' className='section-hero'>
      <div className='container hero-wrapper'>
        <h2 className='hero-title'>{heroData.title}</h2>
        <p className='hero-subtitle'>{heroData.subtitle}</p>
        <div className='hero-cta-wrapper'>
          <a
            className={heroData.btnResume.style}
            href={heroData.btnResume.href}
            target='_blank'
            rel='noopener noreferrer'
            // download
          >
            <FontAwesomeIcon
              icon={heroData.btnResume.icon}
              className='btn-icon'
            />
            {heroData.btnResume.text}
          </a>
          <AnchorLink
            className={heroData.btnContact.style}
            href={heroData.btnContact.href}
            offset={scrollOffset}
          >
            <FontAwesomeIcon
              icon={heroData.btnContact.icon}
              className='btn-icon'
            />
            {heroData.btnContact.text}
          </AnchorLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
