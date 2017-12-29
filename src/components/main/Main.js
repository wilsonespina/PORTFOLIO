import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Main = ({scrollTo}) => {

  return(
    <Row className="main-section section container-fluid"> <img className="main-head-img" src="../../assets/tube_wallpaper.jpg"/>
      <Element name="main" className="element" >
        <h1 className="heading">Main Section</h1>
      </Element>


      <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/headshots/HEADSHOT.png" alt="profile-img" className="profile-pic responsive-img"/>

      <h2>Wilson Espina</h2>
      <h3>Welcome to my Portfolio....</h3>
      <h3>Web Developer</h3>
      <h3>(ex)Breakdancer</h3>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Main);
