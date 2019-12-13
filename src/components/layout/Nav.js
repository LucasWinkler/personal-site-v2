import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav className='nav'>
      <ul className='nav__menu'>
        <li className='nav__menu__item'>
          <a href='#home' className='nav__menu__item__link'>
            Home
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
          <a href='#contact' className='nav__menu__item__link'>
            Contact
          </a>
        </li>
        <li className='nav__menu__item'>
          <a href='#resume' className='nav__menu__item__link--cta'>
            <FontAwesomeIcon icon={faDownload} className='mr-0-5' />
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
