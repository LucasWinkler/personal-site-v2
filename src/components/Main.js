import React from 'react';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    <main id='main-content' className='main-content'>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
