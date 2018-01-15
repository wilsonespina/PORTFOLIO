import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Body from '../main/Body';
import Project1 from '../projects/project1';
import Project2 from '../projects/project2';
import Project3 from '../projects/project3';
import Project4 from '../projects/project4';

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

export default withRouter(Routes);
