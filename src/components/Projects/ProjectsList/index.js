import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Project from '../Project';

import './styles.scss';

const ProjectsList = () => {
  return (
    <main id="projects" className="Projects-Container">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <h2 className="Projects-Title text-primary">Proyectos</h2>
        </ScrollAnimation>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </main>
  );
};

export default ProjectsList;
