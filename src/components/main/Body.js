import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import Main from './Main';
import About from '../utility/About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from '../utility/Contact';

const Body = () => {

  return(
    <Row className="container-fluid">
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Row>
  );
};

export default withRouter(Body);
