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
  const navClassNames = isNavOpen
    ? 'navbar-menu navbar-menu-show'
    : 'navbar-menu';

  useEffect(() => {
    setScrollOffset(document.getElementById('header').offsetHeight);
  }, [scrollOffset]);

  return (
    <nav id='navbar' className={'navbar'}>
      <button id='navbar-toggle' className='navbar-toggle'>
        <FontAwesomeIcon icon={faBars} />
      </button>
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
        <li className='navbar-item-divider' />
        {socials.map((social, i) => {
          return (
            <li className='navbar-item navbar-item-social' key={i}>
              <a
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='navbar-link  navbar-link-social'
              >
                <FontAwesomeIcon icon={social.icon} fixedWidth />
              </a>
            </li>
          );
        })}
      </ul>
      {/* <ul className='navbar-menu navbar-menu-social'>
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
      </ul> */}
    </nav>
  );
}

export default Navbar;
