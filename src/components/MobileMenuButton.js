import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function MobileMenuButton({ onClick, isNavOpen }) {
  const navToggleIcon = isNavOpen ? faTimes : faBars;

  return (
    <button
      id='nav-mobile-toggle'
      className='nav-mobile-toggle'
      onClick={onClick}
      aria-pressed={isNavOpen}
      aria-label='Toggle mobile navigation menu button'
    >
      <FontAwesomeIcon icon={navToggleIcon} fixedWidth />
    </button>
  );
}

export default MobileMenuButton;
