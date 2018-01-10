import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Project4 = () => {

  return(
    <Row className="project-individual-section container-fluid">
      <div className="container">
        <h1 className="span-pink">Project 4</h1>
        <Link to="/">back</Link>

        <p className="span-white">My final project at General Assembly was to create a full MERN stack application with an open scope to create a RESTful site within a week. The website ended up being a social exercising platform which encourages people to compete and upload the best running traces they’ve saved on the social exercise app, Strava. I combined map data received from the Strava API and with the Google Maps API to give a visual representation of run activities.The website included the ability to rate and comment on submitted runs. This project was a brilliant opportunity to incorporate smaller features learnt through the course, such as having searching and filtering functionality on the main index page.</p>
      </div>
    </Row>
  );
};

export default withRouter(Project4);
