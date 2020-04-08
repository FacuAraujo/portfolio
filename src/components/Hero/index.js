import React from 'react';

import Emoji from '../Emoji';

import './styles.scss';

const Header = () => {
  return (
    <div className="Hero-Container">
      <h1 className="Hero-Title">
        <span className="text-primary">
          Hola!
          <Emoji symbol="👋🏼" label="hand" />
        </span>
        <br />
        soy Facu Araujo
      </h1>
      <p className="Hero-Paragraph">
        Un FrontEnd Developer de Buenos Aires, Argentina, buscando mis primeras
        experiencias en IT. Quiero convertirme en FullStack Developer en
        JavaScript, por eso continuo y nunca voy a parar de aprender. Tengo
        experiencia en maquetación de Ecommerce y creación de aplicaciones con
        React.
      </p>
    </div>
  );
};

export default Header;
