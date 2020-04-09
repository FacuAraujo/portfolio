import React from 'react';

import LeftTop from '../../assets/images/left-top.jpg';
import LeftBottom from '../../assets/images/left-bottom.jpg';
import RightTop from '../../assets/images/right-top.jpg';
import RightBottom from '../../assets/images/right-bottom.jpg';

import './styles.scss';

const MyInfo = () => {
  return (
    <section id="myinfo" className="About-Container">
      <div className="container">
        <div className="About-Img">
          <div className="col">
            <span className="About-Img-Box">
              <img src={LeftTop} alt="profile 4" />
            </span>
            <span className="About-Img-Box">
              <img src={LeftBottom} alt="profile 4" />
            </span>
          </div>
          <div className="col">
            <span className="About-Img-Box">
              <img src={RightTop} alt="profile 4" />
            </span>
            <span className="About-Img-Box">
              <img src={RightBottom} alt="profile 4" />
            </span>
          </div>
        </div>
        <div className="About-Text">
          <div className="About-Title">
            <h3>Hola Mundo</h3>
            <div className="Exclamation text-primary">
              <span>!</span>!
            </div>
          </div>
          <p>
            Yo soy un FrontEnd Developer entusiasta, que está buscando su primer
            trabajo en este ambiente. Soy un apasionado de la tecnología y
            actualmente del desarrollo de paginas y aplicaciones web.
          </p>
          <p>
            Comencé hace un año y medio realizando una capacitación profesional
            de desarrollo de sitios web en Escuela Da Vinci donde aprendí las
            bases de HTML, CSS, JavaScript y a utilizar WordPress y Bootstrap.
            Desde ese momento me encuentro en constante aprendizaje de nuevas
            tecnologías a base de varios cursos online en distintas plataformas,
            por ejemplo en Platzi.
          </p>
          <p>
            Tengo experiencia laboral maquetando con HTML, CSS y JavaScript de
            manera freelance sitios de Ecommerce y también algunos desarrollos
            de páginas con WordPress. Actualmente cuento con conocimientos de
            las tecnologías React, Sass, JavaScript (Ecmascript 6) y GIT las
            cuales utilizo para desarrollar distintos proyectos que me ayuden a
            seguir creciendo y aumentando mis habilidades para poder llegar a
            convertirme en FullStack de JavaScript.
          </p>
          <p>
            Me gusta que mis trabajos sean prolijos y cuidados al detalle,
            aunque mi personalidad es un poco desestructurada. Me encanta el
            trabajo en equipo, el poder ayudarse y compartir conocimiento entre
            compañeros. Soy una persona inquieta y que siempre esta buscando
            aprender.
          </p>
          <p>
            Si te interesa contactarme para algún proyecto o trabajo, o
            solamente tenés alguna consulta no dudes en enviarme tu mensaje a
            <span className="text-primary"> facuaaraujo@gmail.com</span>. Estoy
            disponible y te voy a responder lo mas rápido que pueda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
