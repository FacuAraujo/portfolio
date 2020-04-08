import React from 'react';

import Emoji from '../../components/Emoji';
import Button from '../../components/Button';

import './styles.scss';

const NotFound = () => {
  return (
    <div className="NotFound-Container">
      <h1 className="text-primary">
        <Emoji label="angry" symbol="😤" />
        404
      </h1>
      <p>
        No econtramos nada para mostrar
        <br />
        en esta dirección
      </p>
      <Button text="Volver al Home" link="/" />
    </div>
  );
};

export default NotFound;
