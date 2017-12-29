import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Main = ({scrollTo}) => {

  return(
    <Row className="main-section section container-fluid">
      <Element name="main" className="element" >
        <h1 className="heading">Main Section</h1>
      </Element>

      <img src="https://user-images.githubusercontent.com/28314323/32404855-373aa592-c151-11e7-9661-5e870aca48b6.jpg" alt="profile-img" className="profile-pic"/>

      <h2>Wilson Espina</h2>
      <h3>Welcome to my Portfolio....</h3>
      <h3>Web Developer</h3>
      <h3>(ex)Breakdancer</h3>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Main);
