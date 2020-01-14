import React from 'react';

function Project({ project }) {
  return (
    // TODO: Map through all projects and also apply a muted style (or just don't display it) to repo/code links when null
    <div className='project'>
      <div className='project-header'>
        <img
          src={project.image}
          className='project-image'
          alt={project.imageAlt}
        />
        <h2 className='project-title'>{project.title}</h2>
        <div className='project-links'>
          <a
            className='project-link'
            href={project.demoHref}
            target='_blank'
            rel='noopener noreferrer'
          >
            Demo
          </a>
          <a
            className='project-link'
            href={project.repoHref}
            target='_blank'
            rel='noopener noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
      <div className='project-body'>
        <p className='project-description'>{project.description}</p>
        <ul className='project-tech'>
          {/* TODO: Map through project technologies */}
        </ul>
      </div>
    </div>
  );
}

export default Project;
