import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                  aria-label={social.label + ' icon link'}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    fixedWidth
                    aria-hidden='true'
                  />
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
