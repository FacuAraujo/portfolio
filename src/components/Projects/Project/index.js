import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../Button';

import './styles.scss';

const Project = ({ text, images, title, name, github, site, year, type }) => {
  return (
    <div className="Project-Container">
      <div className="Project-Img">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <span className="Img-Box">
            <img src={images[0]} alt="" />
          </span>
          <span className="Img-Box">
            <img src={images[1]} alt="" />
          </span>
        </ScrollAnimation>
      </div>
      <div className="Project-Info">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <h3 className="Project-Title">{name}</h3>
          <h3>{title}</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <div className="Project-Specs">
            <ul>
              <li>
                <span className="text-primary">Año</span> {year}
              </li>
              <li>
                <span className="text-primary">Tipo</span> {type}
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <p>{text}</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          {github && (
            <span className="Project-Button">
              <Button text="Ver en github" linkExt={github} />
            </span>
          )}
          {site && (
            <span className="Project-Button">
              <Button text="Ver sitio" linkExt={site} />
            </span>
          )}
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Project;
