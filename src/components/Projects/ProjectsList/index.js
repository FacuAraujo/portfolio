import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Projects from '../../data/data.json';

import Project from '../Project';

import './styles.scss';

const ProjectsList = () => {
  const { projects } = Projects[0];
  console.log(projects);

  return (
    <main id="projects" className="Projects-Container">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <h2 className="Projects-Title text-primary">Proyectos</h2>
        </ScrollAnimation>
        <div className="Projects-Grid">
          {projects.map(
            ({ text, images, name, title, github, site, type, year }) => (
              <Project
                key={name}
                text={text}
                images={images}
                name={name}
                title={title}
                github={github}
                type={type}
                year={year}
                site={site}
              />
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectsList;
