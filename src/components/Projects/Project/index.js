import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Button from '../../Button';

import './styles.scss';

const Project = () => {
  return (
    <div className="Project-Container">
      <div className="Project-Img">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <span className="Img-Box">
            <img
              src="https://images.unsplash.com/photo-1565171125762-db44231f1a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              alt=""
            />
          </span>
          <span className="Img-Box">
            <img
              src="https://images.unsplash.com/photo-1565171125762-db44231f1a18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
              alt=""
            />
          </span>
        </ScrollAnimation>
      </div>
      <div className="Project-Info">
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <h3>Twitter Clone</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <div className="Project-Specs">
            <ul>
              <li>
                <span className="text-primary">Año</span> 2020
              </li>
              <li>
                <span className="text-primary">Tipo</span> React Firebase Sass
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <p>
            En este proyecto, con el cual busque ampliar mis habilidades
            desarrolle una aplicación con algunas funcionalidades de twitter.
            Aposte a desarrollar el FrontEnd utilizando React y Sass como
            preprocesador. Para el Backend incorpore Firebase, con el cual
            almaceno la información en bases de datos y realizo la
            autenticación.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
          <span className="Project-Button">
            <Button text="Ver en github" linkExt="https://twitter.com" />
          </span>
          <span className="Project-Button">
            <Button text="Ver sitio" linkExt="/#" />
          </span>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Project;
