import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = ({scrollToTop}) => {

  return(
    <Row className="about-section section container-fluid">
      <Element name="about" className="element" >
        {/* <div className="spacer"></div> */}
        <h1>About Section</h1>
      </Element>


      <a onClick={scrollToTop}>To the top!</a>
    </Row>
  );
};

export default withRouter(About);
