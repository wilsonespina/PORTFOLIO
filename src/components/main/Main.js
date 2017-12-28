import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Main = ({scrollToTop}) => {

  return(
    <div className="main-section">
      <Element name="main" className="element" >
        <div className="spacer"></div>
      </Element>

      <h1>PORTFOLIO</h1>
      <h1>Main Section</h1>


      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
};

export default withRouter(Main);
