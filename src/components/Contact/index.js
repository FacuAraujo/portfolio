import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Emoji from '../Emoji';
import Button from '../Button';

import './styles.scss';

const Contact = () => {
  return (
    <section id="contact" className="Contact-Container">
      <div className="container">
        <ScrollAnimation animateIn="fadeInUp" delay={200} duration={1.2}>
          <h2>
            <Emoji label="doubt" symbol="🤔" />
            Y..? <br /> Qué te pareció?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200} duration={1.2}>
          <p>
            Si tenés intenciones de hablar conmigo para que trabajemos juntos o
            simplemente para hacerme alguna consulta, podes hacerlo mediante
            cualquiera de mis redes o simplemente envíame un correo tocando acá
            abajo <Emoji label="hand-to-bottom" symbol="👇🏼" />. Estoy disponible
            y te voy a responder lo más rápido posible.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={200} duration={1.2}>
          <Button
            text="Enviar mensaje"
            linkExt="mailto:facuaaraujo@gmail.com"
          ></Button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
