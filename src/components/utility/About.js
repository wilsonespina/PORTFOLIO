import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = ({scrollTo}) => {

  return(
    <Row className="about-section section container-fluid">
      <Element name="about" className="element" >
        <h1>About Section</h1>
      </Element>


      <a onClick={scrollTo}>To the top!</a>
    </Row>
  );
};

export default withRouter(About);
