import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Projects = ({scrollToTop}) => {

  return(
    <Element name="projects" className="element" >
      <div className="projects-section">
        <h1>Projects Section</h1>

        <a onClick={scrollToTop}>To the top!</a>
      </div>
    </Element>
  );
};

export default withRouter(Projects);
