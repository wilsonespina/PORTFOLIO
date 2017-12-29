import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Grid } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  return(
    <Row className="projects-section section fluid">

      <Element name="projects" className="element" >
        <h1 className="projects-heading">Projects</h1>
      </Element>

      <Row className="project-4">
        <Col xs={11} sm={11} smOffset={0.5} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col md={6}>
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/README/screenshot_landing.jpg" className="project-img"/>
          </Col>

          <Col md={6}>
            <h1>Project 4 - 'TRACE' </h1>
            <h2>MERN stack application</h2>
            <p>Prject at GA</p>
          </Col>

        </Col>
      </Row>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Projects);
