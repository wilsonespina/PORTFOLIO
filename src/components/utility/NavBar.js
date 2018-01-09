import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
require('react-bootstrap/lib/NavbarHeader');
require('react-bootstrap/lib/NavbarToggle');
require('react-bootstrap/lib/NavbarCollapse');

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const NavBar = ({ handleClick }) => {

// if (history.location.pathname === '/Project1'||'/Project2'||'/Project3'||'/Project4') return null;

  return(
    <Navbar fixedTop fluid className="navBar">
      <Navbar.Header className="navbar-header">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleClick} id="menu-icon"></i>
        <Navbar.Toggle />
      </Navbar.Header>

      {/* <div className="center-logo">
        <li>
          <Link activeClass="active" className="main-logo" to="main" spy={true} smooth={true} duration={500} offset={-60}>wilson||espina</Link>
        </li>
      </div> */}

      {/* <div className="center-logo-we">
        <img src="../../assets/WE_Logo_Black.png" alt="logo" className="we-logo"/>
      </div> */}


      <Navbar.Collapse className="full-navbar">
        <ul className="nav navbar-nav pull-right">
          <li><Link activeClass="active" className="section-link" to="about" spy={true} smooth={true} duration={500} offset={-60} >about</Link></li>

          <NavDropdown eventKey={1} title="projects" id="basic-nav-dropdown">
            <Link activeClass="active" className="section-link dropdown-link" to="project-4" spy={true} smooth={true} duration={500} offset={-60} >project 4</Link>
            <Link activeClass="active" className="section-link dropdown-link" to="project-3" spy={true} smooth={true} duration={500} offset={-60} >project 3</Link>
            <Link activeClass="active" className="section-link dropdown-link" to="project-2" spy={true} smooth={true} duration={500} offset={-60} >project 2</Link>
            <Link activeClass="active" className="section-link dropdown-link" to="project-1" spy={true} smooth={true} duration={500} offset={-60} >project 1</Link>
          </NavDropdown>


          <li><Link activeClass="active" className="section-link" to="contact" spy={true} smooth={true} duration={500} offset={-60} >contact</Link></li>
        </ul>
      </Navbar.Collapse>

      <div className="spacer-halfblack"></div>
      <div className="colour-bar-nav">
        <div className="spacer-nav spacer-yellow"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-pink"></div>
        <div className="spacer-nav spacer-yellow"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-pink"></div>
      </div>
      <div className="spacer-halfblack"></div>

    </Navbar>

  );
};

export default withRouter(NavBar);
