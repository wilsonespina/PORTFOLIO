import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Skills = () => {

  return(
    <Element name="skills" className="element">
      <Row className="skills-section section container-fluid">
        <Row className="skills-container">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="skills-box">
            <div className="container-fluid">
              <h3 className="span-pink"><span className="large-font">Development Skills...</span></h3>

              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-angularjs-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-ruby-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-postgresql-plain-wordmark"></i>
              <i className="devicon-bower-line-wordmark"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-webpack-plain-wordmark"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-heroku-line-wordmark"></i>
              <i className="devicon-mocha-plain"></i>
              <i className="devicon-trello-plain-wordmark"></i>
            </div>

          </Col>
        </Row>
      </Row>
    </Element>
  );
};

export default withRouter(Skills);
