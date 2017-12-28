import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollTo}) => {

  return(
    <Row className="contact-section section container-fluid">
      <Element name="contact" className="element" >
        <h1>Contact Section</h1>
      </Element>


      <a onClick={scrollTo}>To the top!</a>
    </Row>
  );
};

export default withRouter(Contact);
