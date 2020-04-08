import React from 'react';

import './styles.scss';

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
        <li>Home</li>
        <li>Sobre mi</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
      <div id="btn-menu" className="burger-menu" onClick={handleClick}>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
