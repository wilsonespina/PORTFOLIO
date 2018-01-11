import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = () => {

  return(
    <Element name="about" className="element" >
      <Row className="about-section section container-fluid">

        <Row className="about-container">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="about-box">
            <div className="container-fluid">
              <img src='../../assets/HEADSHOT.png' alt="profile-img" className="profile-pic responsive-img"/>

              <h3 className="span-pink"><span className="medium-font">Welcome</span> to my <span className="large-font"><em>Portfolio....</em></span></h3>
              
              <h1 className="span-blue">Wilson Espina</h1>
              <h3 className="span-green">Web Developer</h3>
              <h3 className="span-white">(ex)Breakdancer</h3>
            </div>
          </Col>
        </Row>


        <Row className="skills-container">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="skills-box">
            <div className="skills-section">
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-angularjs-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-ruby-plain-wordmark"></i>
              <i className="devicon-rails-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-postgresql-plain"></i>
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

export default withRouter(About);
