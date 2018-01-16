import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollTo}) => {

  return(
    <Row className="contact-section section container-fluid">
      <Element name="contact" className="element" >
        <h3 className="span-pink"><span className="large-font">Contact...</span></h3>

        <form action="mailto:wilson.espina@gmail.com" method="POST">

          <label name="name">Name:</label><br/>
          <input type="text" name="name" /><br/>

          <label name="email">Email:</label><br/>
          <input type="text" name="email" /><br/>

          <label name="name">Comment:</label><br/>
          <input type="text" name="comment" size="50" /><br/>

          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>


        <a onClick={scrollTo}>To the top!</a>
      </Element>
    </Row>
  );
};

export default withRouter(Contact);
