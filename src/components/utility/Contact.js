import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Contact = ({scrollToTop}) => {

  return(
    <Element name="contact" className="element" >
      <div className="contact-section">
        <h1>Contact Section</h1>

        <a onClick={scrollToTop}>To the top!</a>
      </div>
    </Element>
  );
};

export default withRouter(Contact);
