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
  const navClassNames = isNavOpen ? 'nav-menu placeholder-class' : 'nav-menu';
  const navToggleIcon = isNavOpen ? faTimes : faBars;

  useEffect(() => {
    setScrollOffset(document.getElementById('main-navigation').offsetHeight);
  }, [scrollOffset]);

  return (
    <nav id='main-navigation' className='nav nav-fixed'>
      <div className='container nav-wrapper'>
        <AnchorLink
          className='nav-logo'
          href='#section-hero'
          offset={scrollOffset}
        >
          <h1>Lucas Winkler</h1>
        </AnchorLink>
        <button
          id='nav-mobile-toggle'
          className='nav-mobile-toggle'
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-pressed={isNavOpen}
          aria-label='Toggle mobile navigation menu button'
        >
          <FontAwesomeIcon icon={navToggleIcon} fixedWidth />
        </button>
        <ul id='main-navigation-menu' className={navClassNames}>
          {navigation.map((navItem, i) => {
            return (
              <li className='nav-menu-item' key={i}>
                <AnchorLink
                  href={navItem.href}
                  offset={scrollOffset}
                  className='nav-menu-item-link'
                >
                  {navItem.label}
                </AnchorLink>
              </li>
            );
          })}
          <li className='nav-menu-item-divider nav-menu-item-divider_social' />
          {socials.map((social, i) => {
            return (
              <li className='nav-menu-item nav-menu-item_social' key={i}>
                <a
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='nav-menu-item-link nav-menu-item-link_social'
                >
                  <FontAwesomeIcon icon={social.icon} fixedWidth />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
