import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const About = ({scrollToTop}) => {

  return(
    <Element name="about" className="element" >
      <div className="about-section">
        <h1>About Section</h1>

        <a onClick={scrollToTop}>To the top!</a>
      </div>
    </Element>
  );
};

export default withRouter(About);
