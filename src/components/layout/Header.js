import React from 'react';

function Header() {
  return (
    <header>
      <nav className='nav'>
        <div className='nav__logo'>
          <a href='#home' className='nav__logo__link'>
            Lucas Winkler
          </a>
        </div>
        <ul className='nav__menu'>
          <li className='nav__menu__item'>
            <a href='#about' className='nav__menu__item__link'>
              About
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#skills' className='nav__menu__item__link'>
              Skills
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#projects' className='nav__menu__item__link'>
              Projects
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#resume' className='nav__menu__item__link--special'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
