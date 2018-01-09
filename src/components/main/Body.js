import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import Main from './Main';
import About from '../utility/About';
import Projects from './Projects';
import Contact from '../utility/Contact';

const Body = ({scrollToTop, scrollTo}) => {

  return(
    <Row className="container-fluid">
      <Main
        scrollToTop={scrollToTop}
        scrollTo={scrollTo} />
      <About
        scrollToTop={scrollToTop}
        scrollTo={scrollTo} />
      <Projects
        scrollToTop={scrollToTop}
        scrollTo={scrollTo} />
      <Contact
        scrollToTop={scrollToTop}
        scrollTo={scrollTo} />
    </Row>
  );
};

export default withRouter(Body);
