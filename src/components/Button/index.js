import React from 'react';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/images/arrow.svg';

import './styles.scss';

const Button = ({ linkExt, link, text }) => {
  if (linkExt) {
    return (
      <a
        href={linkExt}
        target="_blank"
        rel="noopener noreferrer"
        className="Button text-primary"
      >
        {text}
        <img src={Arrow} alt="arrow" />
        <img src={Arrow} alt="arrow" />
      </a>
    );
  }

  return (
    <Link to={link} className="Button text-primary">
      {text}
      <img src={Arrow} alt="arrow" />
      <img src={Arrow} alt="arrow" />
    </Link>
  );
};

export default Button;
