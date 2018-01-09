import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Project1 = () => {

  return(
    <Row className="project-individual-section container-fluid">
      <h1 className="span-pink">Project 1</h1>
      <a href="/">back</a>

      <p className="span-white">My first project at GA was to build an interactive game using JavaScript and jQuery for DOM manipulation. This was my first opportunity to apply my early JS knowledge to a working app and to also apply CSS styling to my own product. The overall look and feel of the app was that of a retro 8-bit arcade game with a simple colour scheme and mocked-up game controllers in the user interface. The game itself consisted of a character that a user can move around a grid and push an object into the goal area. The JS game logic included collision detection between the character, object and game environment as well as random spawning of the goal object. I also incorporated music and sound files to add an extra dimension to the user experience.</p>

    </Row>
  );
};

export default withRouter(Project1);
