import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/images/arrow.svg';

import './styles.scss';

const Button = ({ link, text }) => {
  return (
    <a href={link} className="Button text-primary">
      {text}
      <img src={Arrow} alt="arrow" />
      <img src={Arrow} alt="arrow" />
    </a>
  );
};

export default Button;
