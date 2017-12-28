import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  return(
    <Row className="projects-section section container-fluid">

      <Element name="projects" className="element" >
        <h1 className="projects-heading">Projects Section</h1>
      </Element>


      <a onClick={scrollTo}>To the top!</a>
    </Row>
  );
};

export default withRouter(Projects);
