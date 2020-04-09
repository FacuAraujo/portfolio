import React from 'react';

import ScrollToTop from '../../functions/ScrollToTop';

import MyInfo from '../../components/MyInfo';
import Contact from '../../components/Contact';

const About = () => {
  ScrollToTop();
  return (
    <main>
      <MyInfo />
      <Contact />
    </main>
  );
};

export default About;
