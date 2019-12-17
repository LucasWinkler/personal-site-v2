import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navigation from '../data/navigation';
import socials from '../data/socials';

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
    <nav
      id='navbar'
      className={scrollTop <= 1 ? 'navbar' : 'navbar navbar-shrink'}
    >
      <a href='/' className='navbar-logo'>
        <h1>Lucas Winkler</h1>
      </a>
      <ul className='navbar-menu'>
        {navigation.map((navItem, i) => {
          return (
            <li className='navbar-item' key={i}>
              <a href={navItem.href} className='navbar-link'>
                {navItem.label}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='navbar-menu navbar-menu-social'>
        {socials.map((social, i) => {
          return (
            <li className='navbar-item' key={i}>
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='navbar-link'
              >
                <FontAwesomeIcon icon={social.icon} fixedWidth />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
