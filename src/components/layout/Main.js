import React from 'react';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

function Main() {
  return (
    <main id='main' className='main'>
      <div className='container'>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
