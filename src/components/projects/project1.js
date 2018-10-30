import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import LazyLoad from 'react-lazyload';

import NavBarProjects from '../utility/NavBarProjects';
import Sidebar from '../utility/Sidebar';

class Project1 extends React.Component {
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
    this.state.showNav ? this.setState({ showNav: false }) : this.setState({ showNav: true });
  }

  render() {
    return (
      <Row className="container-fluid">
        <Sidebar showNav={this.state.showNav} />

        <NavBarProjects
          handleClick={this.handleClick} />

        <Row className="project-individual-section container-fluid">
          <div className="container">

            <h1 className="span-white"><span className="span-yellow">'Can You Diglett?'</span><span className="span-pink"> - </span><span className="span-pink text-small">Project 1</span></h1>

            <a href="https://portfolio-project-1.herokuapp.com/" target="blank"><div className="btn btn-info btn-large">Link on Heroku</div></a>

            <p className="span-white medium-font">My first project at GA was to build an interactive game using JavaScript and jQuery for DOM manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface.</p>

            <p className="span-white medium-font">The game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience.</p>

            <div className="projects-icons-box span-blue">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-heroku-line-wordmark"></i>
            </div>

            <div className="picture-project-series container-fluid">
              <LazyLoad height={694} throttle={300} scroll={true} resize={true}>
                <a href="https://portfolio-project-1.herokuapp.com/" target="blank">
                  <img src="../../assets/screenshot_game.jpg" alt="project2-img1" className="project-images-screenshots" />
                </a>
              </LazyLoad>
            </div>


          </div>
        </Row>
      </Row>
    );
  }
}

export default withRouter(Project1);
