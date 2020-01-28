import React from 'react';
import projectData from '../../../data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  return (
    <section className='section-projects'>
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
                    {project.links.live !== null ? (
                      <a
                        href={project.links.live.href}
                        className='project-link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          icon={faExternalLinkAlt}
                          fixedWidth
                          aria-hidden='true'
                        />
                        Live
                      </a>
                    ) : null}

                    {project.links.source !== null ? (
                      <a
                        href={project.links.source.href}
                        className='project-link'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <FontAwesomeIcon
                          icon={faCode}
                          fixedWidth
                          aria-hidden='true'
                        />
                        Source
                      </a>
                    ) : null}
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
