import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = () => {

  return(
    <Row className="about-section section container-fluid">
      <Element name="about" className="element" >
      </Element>

      <div className="container-fluid">
        <img src='../../assets/HEADSHOT.png' alt="profile-img" className="profile-pic responsive-img"/>

        <h1 className="span-blue">Wilson Espina</h1>
        <h3 className="span-pink"><span className="medium-font">Welcome</span> to my <span className="large-font"><em>Portfolio....</em></span></h3>
        <h3 className="span-green">Web Developer</h3>
        <h3 className="span-white">(ex)Breakdancer</h3>
      </div>

    </Row>
  );
};

export default withRouter(About);
