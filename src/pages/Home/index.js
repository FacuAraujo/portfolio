import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProjectsList from '../../components/Projects/ProjectsList';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <ProjectsList />
    </React.Fragment>
  );
};

export default Home;
