import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollTo}) => {

  return(
    <Element name="contact" className="element" >
      <Row className="contact-section section container-fluid">
        <Row className="contact-container">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="skills-box">
            <div className="container-fluid margin-top-20 margin-bottom-20">
              <h3 className="span-pink margin-bottom-50"><span className="large-font">Contact</span></h3>

              <div className="contact-links-tile large-font span-blue">
                <a href="mailto:wilson.espina@gmail.com"><div className="email"><i className="fa fa-envelope" aria-hidden="true"></i>Email - <span className="span-white"><em>wilson.espina@gmail.com</em></span></div></a>

                <a href="https://github.com/wilsonespina" target="blank"><div className="github"><i className="fa fa-github" aria-hidden="true"></i>GitHub - <span className="span-white"><em>wilsonespina</em></span></div></a>

                <a href="https://www.linkedin.com/in/wilson-espina" target="blank"><div className="linkedin"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn - <span className="span-white"><em>https://www.linkedin.com/in/wilson-espina/</em></span></div></a>

                <a href="https://twitter.com/Wilson_Espina" target="blank"><div className="twitter"><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter - <span className="span-white"><em>Wilson_Espina</em></span></div></a>

                {/* <div className="ga-profile"><img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/generalassembly_icon.png" className="ga-icon" /> GA Profile</div> */}
              </div>

            </div>

          </Col>
        </Row>
      </Row>
    </Element>
  );
};

export default withRouter(Contact);
