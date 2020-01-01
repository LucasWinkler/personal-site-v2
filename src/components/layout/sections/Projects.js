import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Project from '../../Project';
import projectData from '../../../data/projects';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section id='section-projects' className='section-projects'>
      <div className='container projects-wrapper'>
        <h2 className='projects-title'>{projectData.title}</h2>
        <div className='projects-list'>
          {/* {projectData.projects.map((project, i) => {
              return <Project project={project} key={i} />;
            })} */}
          <div className='project'>
            <a href='www.google.ca' className='project-image-link'>
              <img
                src='https://via.placeholder.com/480x320'
                alt='Placeholder project'
                className='project-image'
              />
            </a>
            <div className='project-content'>
              <h3 className='project-title'>TurboGames</h3>
              <p className='project-description'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                accusamus animi velit voluptatibus perspiciatis cupiditate sint.
              </p>
              <div className='project-links'>
                <a
                  className='project-link'
                  href='www.github.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {/* <FontAwesomeIcon icon={faGithub} fixedWidth /> */}
                  View Project
                </a>
                {/* <a
                  className='project-link'
                  href='www.google.ca'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
