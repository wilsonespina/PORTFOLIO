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

              <h3 className="span-pink margin-bottom-50"><span className="medium-font">Welcome</span> to my <span className="large-font">Portfolio...</span></h3>

              <img src='../../assets/HEADSHOT.png' alt="profile-img" className="profile-pic responsive-img"/>

              <div className="info-box">
                <h1 className="span-blue">Wilson Espina</h1>
                <h3 className="span-green">Front End Web Developer</h3>
                <h3 className="span-yellow margin-bottom-20"><em>(<span className="span-white">ex</span>)Breakdancer</em></h3>
              </div>


              <blockquote className="quotation-marks"></blockquote><p className="span-white normal-font margin-bottom-50 margin-top-minus60 padding-sides-10">Having recently decided on a huge a career change, I have just graduated from <em>General Assembly</em> London{"'"}s Web Development Immersive course.</p>

              <p className="span-white normal-font margin-bottom-50">I had an early career within civil engineering projects. However, having had a taste for web developing, I{"'"}m now hooked!</p>

              <p className="span-white normal-font margin-bottom-50">I{"'"}m also partial to a bit of a dance now and again.</p>

            </div>
          </Col>
        </Row>

      </Row>
    </Element>
  );
};

export default withRouter(About);
