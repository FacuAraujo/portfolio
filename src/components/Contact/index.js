import React from 'react';

import Emoji from '../Emoji';
import Button from '../Button';

import './styles.scss';

const Contact = () => {
  return (
    <section id="contact" className="Contact-Container">
      <div className="container">
        <h2>
          <Emoji label="doubt" symbol="🤔" />
          Y..? <br /> Qué te pareció?
        </h2>
        <p>
          Si tenés intenciones de hablar conmigo para que trabajemos juntos o
          simplemente para hacerme alguna consulta, podes hacerlo mediante
          cualquiera de mis redes o simplemente envíame un correo tocando aca
          abajo <Emoji label="hand-to-bottom" symbol="👇🏼" />. Estoy disponible y
          te voy a responder lo mas rápido posible.
        </p>
        <Button
          text="Enviar mensaje"
          linkExt="mailto:facuaaraujo@gmail.com"
        ></Button>
      </div>
    </section>
  );
};

export default Contact;
