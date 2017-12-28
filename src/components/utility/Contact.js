import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollToTop}) => {

  return(
    <Row className="contact-section section container-fluid">
      <Element name="contact" className="element" >
        {/* <div className="spacer"></div> */}
        <h1>Contact Section</h1>
      </Element>


      <a onClick={scrollToTop}>To the top!</a>
    </Row>
  );
};

export default withRouter(Contact);
