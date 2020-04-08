import React from 'react';

import Project from '../Project';

import './styles.scss';

const ProjectsList = () => {
  return (
    <main id="projects" className="Projects-Container">
      <div className="container">
        <h2 className="Projects-Title text-primary">Proyectos</h2>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </main>
  );
};

export default ProjectsList;
