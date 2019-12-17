import React from 'react';

function Hero() {
  return (
    <section id='hero-section' className='hero-section'>
      <div className='container'>
        <h2 className='hero-title'>Lucas Winkler</h2>
        <p className='hero-lead'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, quo.
          Fugiat velit dignissimos quae quia?
        </p>
        <button id='btn-download-resume' className='btn btn-cta'>
          Resume
        </button>
      </div>
    </section>
  );
}

export default Hero;
