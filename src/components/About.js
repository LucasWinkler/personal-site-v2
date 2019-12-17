import React from 'react';

function Hero() {
  return (
    <section className='about-section'>
      <div className='container'>
        <h2 className='about-title'>Lucas Winkler</h2>
        <p className='about-lead'>
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
