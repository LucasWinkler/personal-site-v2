import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = {
  title: 'Lucas Winkler',
  subtitle:
    'Hey, this is my personal website which should give you a good understanding of my skills as a front-end web developer.',
  btnResume: {
    text: 'Resume',
    icon: faExternalLinkAlt,
    style: 'btn btn-cta',
    href: './lucas_winkler-resume.pdf' // TODO: Create resume, convert to PDF and name it lucas_winkler-resume
  },
  btnContact: {
    text: 'Contact',
    icon: faEnvelope,
    style: 'btn btn-cta btn-cta-outline',
    href: '#section-contact'
  }
};

export default data;
