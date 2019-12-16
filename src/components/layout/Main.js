import React from 'react';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

function Main() {
  return (
    <main id='content' className='content'>
      <div className='container'>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
