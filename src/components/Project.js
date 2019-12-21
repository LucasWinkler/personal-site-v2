import React from 'react';

function Project({ project }) {
  return (
    // TODO: Find a place to put github and view buttons
    <div className='project'>
      <header className='project-header'>
        <img src={project.image} class='project-image' alt={project.imageAlt} />
        <h5 className='project-title'></h5>
      </header>
      <div className='project-body'>
        <p>{project.description}</p>
      </div>
      <footer className='project-footer'>
        <ul className='project-tech'>
          {/* TODO: Map through project technologies */}
        </ul>
      </footer>
    </div>
  );
}

export default Project;
