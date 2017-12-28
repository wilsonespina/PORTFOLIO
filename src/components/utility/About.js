import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = ({scrollToTop}) => {

  return(
    <div className="about-section">
      <Element name="about" className="element" >
        <div className="spacer"></div>
      </Element>
      
      <h1>About Section</h1>

      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
};

export default withRouter(About);
