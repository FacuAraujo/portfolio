import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sobre-mi" component={About} />
        <Route path="*" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
