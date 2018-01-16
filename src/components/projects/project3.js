import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';

import NavBarProjects from '../utility/NavBarProjects';
import Sidebar from '../utility/Sidebar';

class Project3 extends React.Component {
  state = {
    showNav: false
  }

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
  }

  render() {
    return(
      <Row className="container-fluid">
        <Sidebar showNav={this.state.showNav} />

        <NavBarProjects
          handleClick={this.handleClick} />

        <Row className="project-individual-section container-fluid">
          <div className="container">
            <h1 className="span-white"><span className="span-yellow">'Gig.ly'</span><span className="span-pink"> - </span><span className="span-pink text-small">Project 3</span></h1>

            <a href="https://gigly-wilson.herokuapp.com/" target="blank"><div className="btn btn-info btn-large">Link on Heroku</div></a>

            <p className="span-white medium-font">In my third project, I worked in a four person group project where our product was a social music event app designed for people to create groups attending upcoming gigs. Our application used a MEAN stack and combined three external API’s, pulling event information from Ticketmaster, playing relevant songs from Spotify and displaying the location for each event using Google Maps.</p>

            <p className="span-white medium-font">This was my first opportunity to working in team environment and it highlighted the importance of using project management tools such as Trello to keep the team aligned and informed of agile sprints. Features within the app were shared between the team and I was responsible for implementing and running the back end testing using Mocha and Chai. I also built the comments functionality and styled the section using a combination of Bulma and SASS.</p>

            <div className="projects-icons-box span-blue">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-angularjs-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-heroku-line-wordmark"></i>
              <i className="devicon-mocha-plain"></i>
              <i className="devicon-trello-plain-wordmark"></i>
            </div>

            <div className="picture-project-series container-fluid">
              <a href="https://gigly-wilson.herokuapp.com/" target="blank"><img src="../../assets/screenshot_landingpage_project3.png" alt="project3-img1" className="project-images-screenshots"/></a>

            </div>
          </div>
        </Row>
      </Row>
    );
  }
}

export default withRouter(Project3);
