import React from 'react';
import { withRouter } from 'react-router-dom';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = ({ history }) => {
  return(
    <nav className="navbar navBar navbar-static-top navbar-fixed-top">
      <div className="container-fluid full-navbar">
        <div className="navbar-header">
          {/* <a className="navbar-brand" href="#">Wilson Espina</a> */}
          <Link activeClass="active" className="navbar-brand main-logo" to="main" spy={true} smooth={true} duration={500} >wilson espina</Link>
        </div>
        <div className="collapse navbar-collapse full-navbar">
          <ul className="nav navbar-nav pull-right">
            {/* <li><Link activeClass="active" className="main-section-link" to="main" spy={true} smooth={true} duration={500} >main</Link></li> */}
            <li><Link activeClass="active" className="section-link" to="projects" spy={true} smooth={true} duration={500} >projects</Link></li>
            <li><Link activeClass="active" className="section-link" to="about" spy={true} smooth={true} duration={500} >about</Link></li>
            <li><Link activeClass="active" className="section-link" to="contact" spy={true} smooth={true} duration={500} >contact</Link></li>
          </ul>
        </div>

      </div>
    </nav>

  );
};

export default withRouter(NavBar);
