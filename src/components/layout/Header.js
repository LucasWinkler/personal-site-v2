import React from 'react';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <h1 className='nav__logo'>
          <a href='#home' className='nav__logo-link'>
            Lucas Winkler
          </a>
        </h1>
        <ul className='nav__menu'>
          <li className='nav__menu-item'>
            <a href='#about' className='nav__menu-item-link'>
              About
            </a>
          </li>
          <li className='nav__menu-item'>
            <a href='#skills' className='nav__menu-item-link'>
              Skills
            </a>
          </li>
          <li className='nav__menu-item'>
            <a href='#projects' className='nav__menu-item-link'>
              Projects
            </a>
          </li>
          <li className='nav__menu-item'>
            <a href='#resume' className='nav__menu-item-link-download'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
