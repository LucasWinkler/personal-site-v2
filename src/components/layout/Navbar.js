import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <nav className={scrollTop <= 30 ? 'navbar' : 'navbar navbar-shrink'}>
      <a href='/' className='navbar-logo'>
        <h1>Lucas Winkler</h1>
      </a>
      <ul className='navbar-menu'>
        <li className='navbar-item'>
          <a href='#about' className='navbar-link'>
            About
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#projects' className='navbar-link'>
            Projects
          </a>
        </li>
        <li className='navbar-item'>
          <a href='#contact' className='navbar-link'>
            Contact
          </a>
        </li>
      </ul>
      <ul className='navbar-menu navbar-menu-social'>
        <li className='navbar-item'>
          <a
            href='https://github.com/LucasWinkler'
            target='_blank'
            rel='noopener noreferrer'
            className='navbar-link'
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
        </li>
        <li className='navbar-item'>
          <a
            href='https://www.linkedin.com/in/lucas-winkler/'
            target='_blank'
            rel='noopener noreferrer'
            className='navbar-link'
          >
            <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
          </a>
        </li>
        <li className='navbar-item'>
          <a
            href='mailto:lucasj.winkler1999@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='navbar-link'
          >
            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
