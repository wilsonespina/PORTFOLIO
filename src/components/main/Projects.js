import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link as Go, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  const backgroundImage = '../../assets/screenshot_landing.jpg';

  return(
    <Row className="projects-section section container-fluid">
      <Element name="project-4" className="element" id="projects">
        <Row className="project-4">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <div className="projects-heading-top center-text">
              <h3 className="span-pink"><span className="xl-font">|</span><span className="medium-font">Projects</span><span className="xl-font">|</span></h3>
              <h3 className="span-green">Some of my past work</h3>
            </div>

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src={backgroundImage} alt="image04" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project4"><div className="img-text-layer">TRACE</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'TRACE'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 4</span></h1>

              <h2 className="span-green">MERN stack application</h2>

              <p className="span-white medium-font margin-top-20">I created a competitive running app that encourages users to upload the best running traces saved on their exercise app, Strava.</p>

              <p className="span-white medium-font margin-top-20">The app uses the Strava and Google Maps APIs to help visualise the trace of real-life runs. People can then comment and rate runs submitted by the TRACE community.</p>

            </Col>
          </Col>
        </Row>

        <Row className="project-3">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage_project3.png" alt="image03" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project3"><div className="img-text-layer">Gig.ly</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'Gig.ly'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 3</span></h1>

              <h2 className="span-green">MEAN stack group project</h2>

              <p className="span-white medium-font margin-top-20">In my group project, we created an app to help people plan their gigs nights out in London. We used data from the TicketMaster API to display event information and used the Google Maps API to show where they were.</p>

              <p className="span-white medium-font margin-top-20">Within the app, users can create their own groups for each event and also leave comments for others.</p>

            </Col>
          </Col>
        </Row>

        <Row className="project-2">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_landingpage.jpg" alt="image02" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project2"><div className="img-text-layer">KatSuper Store</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'KatSuper Store'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 2</span></h1>

              <h2 className="span-green">RESTful app</h2>

              <p className="span-white medium-font margin-top-20">For my second app, I created a RESTful application with authentication so that users could login and comment on their favourite Katsu Curry spots in London.</p>

              <p className="span-white medium-font margin-top-20">Creating the KatSuper Store was also the first time I got to use SASS and EJS in a project.</p>

            </Col>
          </Col>
        </Row>

        <Row className="project-1">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">

            <Col xs={12} sm={12} md={12} lg={6} className="project-image-left img-container">
              <img src="../../assets/screenshot_game.jpg" alt="image01" className="project-img"/>
              <div className="img-middle-layer">
                <Link to="/project1"><div className="img-text-layer">Can You Diglett?</div></Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-yellow">'Can You Diglett?'</span><span className="span-pink"> - </span><span className="span-blue text-small">Project 1</span></h1>

              <h2 className="span-green">JavaScript game</h2>

              <p className="span-white medium-font margin-top-20">In my first project at GA, I created a simple block moving game using JavaScript/jQuery and CSS. I emulated a retro gaming experience and based it around one of my favourite games growing up - Pok&eacute;mon.</p>

            </Col>
          </Col>
        </Row>


      </Element>
    </Row>
  );
};

export default withRouter(Projects);
