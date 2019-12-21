import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';

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
