import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className='header'>
      <h1 className='logo'>
        <a href='index.html' className='logo__link'>
          Lucas Winkler
        </a>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;
