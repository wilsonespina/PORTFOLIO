import React from 'react';
import { withRouter } from 'react-router-dom';
import { MenuIcon } from 'react-simple-sidenav';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = ({ handleClick }) => {
  return(
    <nav className="navbar navBar navbar-static-top navbar-fixed-top">
      <div className="container-fluid full-navbar">
        <div className="navbar-header">

          <Link activeClass="active" className="navbar-brand main-logo" to="main" spy={true} smooth={true} duration={500} offset={-50}><MenuIcon onClick={handleClick}/> wilson||espina</Link>

        </div>

        <div className="collapse navbar-collapse full-navbar">
          <ul className="nav navbar-nav pull-right">
            <li><Link activeClass="active" className="section-link" to="about" spy={true} smooth={true} duration={500} offset={-50} >about</Link></li>
            <li><Link activeClass="active" className="section-link" to="projects" spy={true} smooth={true} duration={500} offset={-50} >projects</Link></li>
            <li><Link activeClass="active" className="section-link" to="contact" spy={true} smooth={true} duration={500} offset={-50} >contact</Link></li>
          </ul>
        </div>

        <div className="spacer-nav spacer-yellow"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-pink"></div>
        <div className="spacer-nav spacer-yellow"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-pink"></div>
        <div className="spacer-black"></div>


      </div>
    </nav>

  );
};

export default withRouter(NavBar);
