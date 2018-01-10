import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Carousel } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollTo}) => {

  const backgroundImage = '../../assets/screenshot_landing.jpg'

  return(
    <Row className="projects-section section container-fluid">
      {/* <h1 className="heading">Projects</h1> */}

      <Row className="project-4">
        <Element name="project-4" className="element" id="project-4">
          <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
            <Col xs={12} sm={6} md={6} lg={6} className="project-image-left">
              <img src={backgroundImage || 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-4/README/screenshot_landing.jpg' } alt="image01" className="project-img responsive-img"/>

            </Col>

            <Col xs={12} sm={6} md={6} lg={6} className="project-text-right">
              <h1 className="span-white"><span className="span-blue">Project 4</span><span className="span-pink"> - </span><span className="span-yellow text-small">'TRACE'</span></h1>

              <h2 className="span-green">MERN stack application</h2>
              <p className="span-white">My final project at General Assembly was to create a full MERN stack application with an open scope to create a RESTful site within a week. The website ended up being a social exercising platform which encourages people to compete and upload the best running traces they’ve saved on the social exercise app, Strava. I combined map data received from the Strava API and with the Google Maps API to give a visual representation of run activities.The website included the ability to rate and comment on submitted runs. This project was a brilliant opportunity  to incorporate smaller features learnt through the course, such as having searching and filtering functionality on the main index page.</p>

              <a href="/Project4" className="btn btn-success">More info</a>
            </Col>
          </Col>
        </Element>
      </Row>

      <Element name="project-3" className="element" >
      </Element>

      <Row className="project-3">
        <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col xs={12} sm={6} md={6} lg={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/screenshot_landingpage_project3.png" alt="image02" className="project-img"/>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} className="project-text-right">
            <h1 className="span-white"><span className="span-blue">Project 3</span><span className="span-pink"> - </span><span className="span-yellow text-small">'Gigly'</span></h1>

            <h2 className="span-green">Group Project</h2>
            <p className="span-white">In my third project, I worked in a four person group project where our product was a social music event app designed for people to create groups attending upcoming gigs. Our application used a MEAN stack and combined three external API’s, pulling event information from Ticketmaster, playing relevant songs from Spotify and displaying the location for each event using Google Maps. This was my first opportunity to working in team environment and it highlighted the importance of using project management tools such as Trello to keep the team aligned and informed of agile sprints. Features within the app were shared between the team and I was responsible for implementing and running the back end testing using Mocha and Chai. I also built the comments functionality and styled the section using a combination of Bulma and SASS.</p>

            <a href="/Project3" className="btn btn-success">More info</a>
          </Col>
        </Col>
      </Row>

      <Element name="project-2" className="element" >
      </Element>
      <Row className="project-2">
        <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col xs={12} sm={6} md={6} lg={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-2/README/screenshot_landingpage.jpg" alt="image03" className="project-img"/>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} className="project-text-right">
            <h1 className="span-white"><span className="span-blue">Project 2</span><span className="span-pink"> - </span><span className="span-yellow text-small">'KatSuper Store'</span></h1>


            <h2 className="span-green">RESTful app</h2>
            <p className="span-white">For my second major project at GA, I created my first fully RESTful application with backend authentication using Express.js Sessions. This project was my first opportunity to get to grips with an application that demonstrated the create, read update, delete (CRUD) functionality found in most websites.</p>

            <p className="span-white">During the course at GA, my coursemates and I often got food from a local food market near the campus. One particular Japanese Katsu wrap stall stood out and in tribute to that stall I chose to create site all about the best Katsu spot in London. The app uses embedded JavaScript (EJS) to render views in the browser and users can add, rate and comment on their favourite katsu curry places.
            </p>

            <a href="/Project2" className="btn btn-success">More info</a>
          </Col>
        </Col>
      </Row>

      <Element name="project-1" className="element" >
      </Element>
      <Row className="project-1">
        <Col xs={12} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1} className="project-tile">
          <Col xs={12} sm={6} md={6} lg={6} className="project-image-left">
            <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/wdi-project-1/README/screenshot_game.jpg" alt="image04" className="project-img"/>
          </Col>

          <Col xs={12} sm={6} md={6} lg={6} className="project-text-right">
            <h1 className="span-white"><span className="span-blue">Project 1</span><span className="span-pink"> - </span><span className="span-yellow text-small">'Can You Diglett?'</span></h1>

            <h2 className="span-green">JavaScript Game</h2>
            <p className="span-white">My first project at GA was to build an interactive game using JavaScript and jQuery for DOM manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface. The game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience.</p>

            <a href="/Project1" className="btn btn-success">More info</a>
          </Col>
        </Col>
      </Row>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Projects);
