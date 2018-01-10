import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollTo}) => {

  return(
    <Row className="contact-section section container-fluid">
      <Element name="contact" className="element" >
        <h1>Contact Section</h1>

        <h2>Email</h2>

        <form method="POST">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="4"></textarea>

          <Button type="submit" bsStyle="success">SUBMIT</Button>
        </form>


        <a onClick={scrollTo}>To the top!</a>
      </Element>
    </Row>
  );
};

export default withRouter(Contact);
