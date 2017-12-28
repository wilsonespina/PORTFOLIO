import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Main = ({scrollTo}) => {

  return(
    <Row className="main-section section container-fluid">
      <Element name="main" className="element" >
        {/* <div className="spacer"></div> */}
        <h1>Main Section</h1>
      </Element>



      <a onClick={scrollTo}>To the top!</a>
    </Row>
  );
};

export default withRouter(Main);
