import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Project3 = () => {

  return(
    <Row className="project-individual-section container-fluid">
      <h1 className="span-pink">Project 3</h1>
      <a href="/">back</a>

      <p className="span-white">In my third project, I worked in a four person group project where our product was a social music event app designed for people to create groups attending upcoming gigs. Our application used a MEAN stack and combined three external API’s, pulling event information from Ticketmaster, playing relevant songs from Spotify and displaying the location for each event using Google Maps. This was my first opportunity to working in team environment and it highlighted the importance of using project management tools such as Trello to keep the team aligned and informed of agile sprints. Features within the app were shared between the team and I was responsible for implementing and running the back end testing using Mocha and Chai. I also built the comments functionality and styled the section using a combination of Bulma and SASS.</p>
    </Row>
  );
};

export default withRouter(Project3);
