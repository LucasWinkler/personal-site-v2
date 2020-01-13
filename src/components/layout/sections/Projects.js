import React from 'react';
import projectData from '../../../data/projects';

//  <a href='https://www.google.ca' className='project-image-link'>
//    <img
//      src='https://via.placeholder.com/480x320'
//      alt='Placeholder project'
//      className='project-image'
//    />
//  </a>;

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
                  src={project.image} //'https://via.placeholder.com/480x320'
                  alt='Placeholder project'
                  className='project-image'
                />
                <div className='project-content'>
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
