import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollToTop}) => {

  return(
    <div className="projects-section">

      <Element name="projects" className="element" >
        <div className="spacer"></div>
      </Element>

      <h1 className="projects-heading">Projects Section</h1>

      <a onClick={scrollToTop}>To the top!</a>
    </div>
  );
};

export default withRouter(Projects);
