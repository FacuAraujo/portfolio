import React from 'react';

import Emoji from '../Emoji';
import SocialIcons from '../SocialIcons';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer-Container">
      <div className="container">
        <SocialIcons />

        <p className="Copy">
          Diseñado y Desarrollado por Facu Araujo{' '}
          <Emoji label="moon" symbol="🌙" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
