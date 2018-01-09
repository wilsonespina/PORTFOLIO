import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Body from '../main/Body';
import Project1 from '../projects/Project1';
import Project2 from '../projects/Project2';
import Project3 from '../projects/Project3';
import Project4 from '../projects/Project4';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Body} />
      <Route exact path="/project4" component={Project4} />
      <Route exact path="/project3" component={Project3} />
      <Route exact path="/project2" component={Project2} />
      <Route exact path="/project1" component={Project1} />
    </Switch>
  );
};

export default Routes;
