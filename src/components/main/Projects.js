import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  return(
    <Row className="projects-section section fluid">

      <Element name="projects" className="element" >
        <h1 className="heading">Projects</h1>
      </Element>

      <Row className="project-4">
        <Col xs={11} sm={11} smOffset={0.5} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col md={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/README/screenshot_landing.jpg" alt="image01" className="project-img"/>

          </Col>

          <Col md={6} className="project-text-right">
            <h1>Project 4 - 'TRACE' </h1>
            <h2>MERN stack application</h2>
            <p>Project at GA</p>
          </Col>
        </Col>
      </Row>

      <Row className="project-3">
        <Col xs={11} sm={11} smOffset={0.5} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col md={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/README/screenshot_landing.jpg" alt="image01" className="project-img"/>
          </Col>

          <Col md={6} className="project-text-right">
            <h1>Project 3 - 'Gigly' </h1>
            <h2>Group Project</h2>
            <p>Project at GA</p>
          </Col>
        </Col>
      </Row>

      <Row className="project-2">
        <Col xs={11} sm={11} smOffset={0.5} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col md={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-2/README/screenshot_landingpage.jpg" alt="image01" className="project-img"/>
          </Col>

          <Col md={6} className="project-text-right">
            <h1>Project 2 - 'KatSuper Store' </h1>
            <h2>RESTful app</h2>
            <p>Project at GA</p>
          </Col>
        </Col>
      </Row>

      <Row className="project-1">
        <Col xs={11} sm={11} smOffset={0.5} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col md={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-1/README/screenshot_game.jpg" alt="image01" className="project-img"/>
          </Col>

          <Col md={6} className="project-text-right">
            <h1>Project 1 - 'Can You Diglett?' </h1>
            <h2>JavaScript Game</h2>
            <p>Project at GA</p>
          </Col>
        </Col>
      </Row>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Projects);
