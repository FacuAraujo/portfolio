import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';

import Header from './components/Header';
import Hero from './components/Hero';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Hero />
  </React.StrictMode>,
  document.getElementById('root')
);
