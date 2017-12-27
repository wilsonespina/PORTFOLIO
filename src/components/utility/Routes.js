import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../main/Main';
import About from '../utility/About';
import Contact from '../utility/Contact';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/main" component={Main} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
