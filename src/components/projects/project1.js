import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';

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
            <h1 className="span-pink">Project 1</h1>
            <Link to="/">back</Link>

            <p className="span-white">My first project at GA was to build an interactive game using JavaScript and jQuery for DOM manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface. The game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience.</p>
          </div>
        </Row>
      </Row>
    );
  }
}

export default withRouter(Project1);
