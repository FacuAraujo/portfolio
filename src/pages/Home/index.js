import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ProjectsList from '../../components/Projects/ProjectsList';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <ProjectsList />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
