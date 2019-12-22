import React from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function Main() {
  return (
    <main id='content' className='content'>
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
