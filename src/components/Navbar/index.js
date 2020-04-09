import React from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';

const handleClick = () => {
  const $btnMenu = document.querySelector('#btn-menu');
  $btnMenu.classList.toggle('menu-active');
  const $mainMenu = document.querySelector('#Main-menu');
  $mainMenu.classList.toggle('active');
};

const Navbar = () => {
  return (
    <nav id="Main-menu" className="Navbar-Container">
      <ul className="Navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre-mi">Sobre mí</Link>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div id="btn-menu" className="burger-menu" onClick={handleClick}>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
