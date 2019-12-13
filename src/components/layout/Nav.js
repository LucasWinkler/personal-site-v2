import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <nav className='nav'>
      <div className='nav-toggle'>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <a href='/' className='logo'>
        <span>Lucas Winkler</span>
      </a>
      <ul className='nav-list'>
        <li className='nav-item'>
          <a href='/' className='nav-link'>
            Home
          </a>
        </li>
        <li className='nav-item'>
          <a href='/skills' className='nav-link'>
            Skills
          </a>
        </li>
        <li className='nav-item'>
          <a href='/projects' className='nav-link'>
            Projects
          </a>
        </li>
        <li className='nav-item'>
          <a href='/contact' className='nav-link'>
            Contact
          </a>
        </li>
        <li className='nav-item'>
          <a href='/resume' className='nav-link'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
