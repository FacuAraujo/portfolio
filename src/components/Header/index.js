import React, { useEffect } from 'react';

import Navbar from '../Navbar';

import './styles.scss';

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const $header = document.getElementById('header');
    if (document.scrollingElement.scrollTop > 1) {
      $header.classList.add('fixed');
    } else {
      $header.classList.remove('fixed');
    }
  };

  return (
    <header id="header" className="Header-Container">
      <div className="container">
        <div className="logo">Facu Araujo</div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
