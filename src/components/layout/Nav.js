import React from 'react';

function Nav() {
  return (
    <nav className='nav'>
      <div className='container'>
        <ul className='nav__menu'>
          <li className='nav__menu__item'>
            <a href='#home' className='nav__menu__item__link'>
              Home
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#projects' className='nav__menu__item__link'>
              Projects
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#skills' className='nav__menu__item__link'>
              Skills
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#contact' className='nav__menu__item__link'>
              Contact
            </a>
          </li>
          <li className='nav__menu__item'>
            <a href='#resume' className='nav__menu__item__link'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
