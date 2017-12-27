import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = ({ history }) => {
  return(
    <nav className="navbar navBar navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Wilson Espina</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            {/* <li><Link activeClass="active" className="main-section-link" to="main" spy={true} smooth={true} duration={500} >main</Link></li> */}
            <li><Link activeClass="active" className="projects-section-link" to="projects" spy={true} smooth={true} duration={500} >projects</Link></li>
            <li><Link activeClass="active" className="about-section-link" to="about" spy={true} smooth={true} duration={500} >about</Link></li>
            <li><Link activeClass="active" className="contact-section-link" to="contact" spy={true} smooth={true} duration={500} >contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>

  );
};

export default withRouter(NavBar);
