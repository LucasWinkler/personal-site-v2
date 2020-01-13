import React from 'react';
import projectData from '../../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section id='section-projects' className='section-projects'>
      <div className='container projects-wrapper'>
        <h2 className='projects-title'>{projectData.title}</h2>
        <div className='projects-list'>
          {projectData.projects.map((project, i) => {
            return (
              <div className='project' key={i}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className='project-image'
                />
                <div className='project-content'>
                  <div className='project-links'>
                    <a href={project.liveHref} className='project-link'>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        fixedWidth
                        aria-hidden='true'
                      />
                      Live
                    </a>
                    <a href={project.sourceHref} className='project-link'>
                      <FontAwesomeIcon
                        icon={faCode}
                        fixedWidth
                        aria-hidden='true'
                      />
                      Source
                    </a>
                  </div>
                  <div className='project-title'>{project.title}</div>
                  <div className='project-description'>
                    {project.description}
                  </div>
                  <ul className='project-tech'>
                    {project.technologies.map((tech, j) => {
                      return (
                        <li className='project-tech-item' key={j}>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
