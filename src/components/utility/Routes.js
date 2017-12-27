import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectsIndex from '../projects/ProjectsIndex';
import ProjectsShow from '../projects/ProjectsShow';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/projects" component={ProjectsIndex} />
      <Route path="/projects/:id" component={ProjectsShow} />
    </Switch>
  );
};

export default Routes;
