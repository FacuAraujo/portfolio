import React from 'react';

import ScrollToTop from '../../functions/ScrollToTop';

import Hero from '../../components/Hero';
import ProjectsList from '../../components/Projects/ProjectsList';
import Contact from '../../components/Contact';

const Home = () => {
  ScrollToTop();

  return (
    <React.Fragment>
      <Hero />
      <ProjectsList />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
