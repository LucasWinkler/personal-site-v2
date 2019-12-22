import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import socials from '../../data/socials';

function Footer() {
  return (
    <footer id='footer' className='footer'>
      <div className='container footer-wrapper'>
        <ul className='footer-socials'>
          {socials.map((social, i) => {
            return (
              <li className='footer-socials-item' key={i}>
                <a
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='footer-socials-item-link'
                >
                  <FontAwesomeIcon icon={social.icon} fixedWidth />
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href='https://github.com/LucasWinkler/personal-site'
          target='_blank'
          rel='noopener noreferrer'
          className='footer-body'
        >
          Designed and Built by Lucas Winkler
        </a>
      </div>
    </footer>
  );
}

export default Footer;
