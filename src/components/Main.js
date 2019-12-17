import React from 'react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    <main id='main-content' className='main-content'>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default Main;
