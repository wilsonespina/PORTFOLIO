import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const Project2 = () => {

  return(
    <Row className="project-individual-section container-fluid">
      <h1 className="span-pink">Project 2</h1>
      <Link to="/">back</Link>

      <p className="span-white">For my second major project at GA, I created my first fully RESTful application with backend authentication using Express.js Sessions. This project was my first opportunity to get to grips with an application that demonstrated the create, read update, delete (CRUD) functionality found in most websites.</p>

      <p className="span-white">During the course at GA, my coursemates and I often got food from a local food market near the campus. One particular Japanese Katsu wrap stall stood out and in tribute to that stall I chose to create site all about the best Katsu spot in London. The app uses embedded JavaScript (EJS) to render views in the browser and users can add, rate and comment on their favourite katsu curry places.</p>

    </Row>
  );
};

export default withRouter(Project2);
