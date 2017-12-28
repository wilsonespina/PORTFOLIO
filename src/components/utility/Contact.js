import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollToTop}) => {

  return(
    <div className="contact-section">
      <Element name="contact" className="element" >
        <div className="spacer"></div>
      </Element>
      
      <h1>Contact Section</h1>

      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
};

export default withRouter(Contact);
