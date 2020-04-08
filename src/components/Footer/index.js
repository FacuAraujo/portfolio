import React from 'react';

import Emoji from '../Emoji';

import './styles.scss';

const Footer = () => {
  return (
    <footer className="Footer-Container">
      <div className="container">
        <div className="Social-Icons">
          <a
            href="https://github.com/FacuAraujo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="Social-Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.467 24.09"
            >
              <defs></defs>
              <path
                d="M15.233,3a12.226,12.226,0,0,0-2.965,24.09,1.785,1.785,0,0,1-.094-.594V24.4H10.638A2.129,2.129,0,0,1,8.7,23.376c-.4-.743-.47-1.88-1.463-2.575-.295-.231-.07-.5.269-.46a3.206,3.206,0,0,1,1.636,1.246,1.572,1.572,0,0,0,1.627.784,11.689,11.689,0,0,0,1.724-.123,3.838,3.838,0,0,1,1.619-2c-4.074-.419-6.018-2.446-6.018-5.2a5,5,0,0,1,1.362-3.3C9.171,10.8,8.817,8.841,9.56,8.1a4.258,4.258,0,0,1,3.207,1.51,9.25,9.25,0,0,1,5.95,0A4.255,4.255,0,0,1,21.926,8.1c.746.745.388,2.708.1,3.664a5,5,0,0,1,1.354,3.289c0,2.749-1.941,4.775-6.009,5.2a4.291,4.291,0,0,1,1.936,3.462V26.5a1.794,1.794,0,0,1-.036.273A12.227,12.227,0,0,0,15.233,3Z"
                transform="translate(-3 -3)"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/facundoaraujo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="Social-Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24.47 23.406"
            >
              <defs></defs>
              <path
                d="M18.956,33.633h-5.32V17.675h5.32ZM16.3,15.547a2.66,2.66,0,1,1,2.659-2.661A2.661,2.661,0,0,1,16.3,15.547ZM38.106,33.633H32.992V25.867c0-1.852-.035-4.234-2.659-4.234-2.663,0-3.073,2.017-3.073,4.1v7.9H22.148V17.663h4.909v2.182h.069a5.409,5.409,0,0,1,4.842-2.579c5.181,0,6.139,3.308,6.139,7.608Z"
                transform="translate(-13.636 -10.227)"
              />
            </svg>
          </a>
          <a
            href="https://codepen.io/facuaraujo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="Social-Icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22.45 22.449"
            >
              <defs></defs>
              <path
                d="M22.024,7,11.763.163a.975.975,0,0,0-1.077,0L.426,7a.981.981,0,0,0-.426.8v6.84a.981.981,0,0,0,.426.8l10.26,6.841a.975.975,0,0,0,1.077,0l10.26-6.841a.981.981,0,0,0,.426-.8V7.805A.981.981,0,0,0,22.024,7ZM12.189,2.769l7.554,5.036-3.37,2.255L12.189,7.266Zm-1.929,0v4.5L6.076,10.06,2.706,7.805ZM1.929,9.609l2.418,1.616L1.929,12.841ZM10.26,19.681,2.706,14.645l3.37-2.255,4.184,2.794Zm.965-6.176-3.408-2.28,3.408-2.28,3.408,2.28Zm.965,6.176v-4.5l4.184-2.794,3.37,2.255Zm8.331-6.84L18.1,11.225,20.52,9.609Z"
                transform="translate(0 -0.001)"
              />
            </svg>
          </a>
        </div>

        <p className="Copy">
          Diseñado y Desarrollado por Facu Araujo{' '}
          <Emoji label="moon" symbol="🌙" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
