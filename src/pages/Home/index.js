import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProjectsList from '../../components/Projects/ProjectsList';
import Contact from '../../components/Contact';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <ProjectsList />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
