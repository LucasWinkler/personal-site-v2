import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import navigation from '../data/navigation';
import socials from '../data/socials';

function Navbar() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    setScrollOffset(document.getElementById('header').offsetHeight);
  }, [scrollOffset]);

  return (
    <nav id='navbar' className={'navbar'}>
      <AnchorLink
        href='#section-hero'
        offset={scrollOffset}
        className='navbar-logo'
      >
        <h1>Lucas Winkler</h1>
      </AnchorLink>
      <ul className='navbar-menu'>
        {navigation.map((navItem, i) => {
          return (
            <li className='navbar-item' key={i}>
              <AnchorLink
                href={navItem.href}
                offset={scrollOffset}
                className='navbar-link'
              >
                {navItem.label}
              </AnchorLink>
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
