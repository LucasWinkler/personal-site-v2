import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import navigation from '../data/navigation';
import socials from '../data/socials';

function Navbar() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  let navClassNames = '';
  // ? 'navbar-menu navbar-menu-mobile-open'
  // : 'navbar-menu';
  if (isNavOpen) {
    navClassNames = 'navbar-menu navbar-menu-mobile-open';
  } else {
    navClassNames = 'navbar-menu';
  }

  useEffect(() => {
    setScrollOffset(document.getElementById('header').offsetHeight);
  }, [scrollOffset]);

  return (
    <nav id='navbar' className={'navbar'}>
      <button
        className='navbar-toggle'
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <AnchorLink
        href='#section-hero'
        offset={scrollOffset}
        className='navbar-logo'
      >
        <h1>Lucas Winkler</h1>
      </AnchorLink>
      <ul className={navClassNames}>
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
        <li className='navbar-item-divider' />
        {socials.map((social, i) => {
          return (
            <li className='navbar-item navbar-item-social' key={i}>
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='navbar-link navbar-link-social'
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
