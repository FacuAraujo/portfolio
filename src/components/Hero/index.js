import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Emoji from '../Emoji';

import './styles.scss';

const Header = () => {
  return (
    <div className="Hero-Container">
      <ScrollAnimation animateIn="fadeInUp" duration={1.2} animateOnce={true}>
        <h1 className="Hero-Title">
          <span className="text-primary">
            Hola!
            <Emoji symbol="👋🏼" label="hand" />
          </span>
          <br />
          soy Facu Araujo
        </h1>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUp"
        delay={200}
        duration={1.2}
        animateOnce={true}
      >
        <p className="Hero-Paragraph">
          Un FrontEnd Developer de Buenos Aires, Argentina, buscando mis
          primeras experiencias en IT. Quiero convertirme en FullStack Developer
          en JavaScript, por eso continuo y nunca voy a parar de aprender. Tengo
          experiencia en maquetación de Ecommerce y creación de aplicaciones con
          React.
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default Header;
