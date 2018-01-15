import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link as Go } from 'react-scroll';

require('react-bootstrap/lib/NavbarHeader');
require('react-bootstrap/lib/NavbarToggle');
require('react-bootstrap/lib/NavbarCollapse');


const NavBar = ({ handleClick }) => {

// if (history.location.pathname === '/Project1'||'/Project2'||'/Project3'||'/Project4') return null;

  return(
    <Navbar fixedTop fluid className="navBar">
      <Navbar.Header className="navbar-header">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleClick} id="menu-icon"></i>

        <div className="center-logo-we">
          <Go activeClass="none" className="section-link" to="main" spy={true} smooth={true} duration={600} offset={-60} ><img src="../../assets/WE_Logo_Black.png" alt="logo" className="we-logo" /></Go>
        </div>
      </Navbar.Header>

      <Navbar.Toggle />


      <Navbar.Collapse className="full-navbar">
        <ul className="nav navbar-nav pull-right">
          <li><Go activeClass="active" className="section-link" to="about" spy={true} smooth={true} duration={500} offset={-60} >about</Go></li>
          <li><Go activeClass="active" className="section-link" to="skills" spy={true} smooth={true} duration={500} offset={-60} >skills</Go></li>
          <li><Go activeClass="active" className="section-link" to="projects" spy={true} smooth={true} duration={500} offset={-60} >projects</Go></li>
          <li><Go activeClass="active" className="section-link" to="contact" spy={true} smooth={true} duration={500} offset={-60} >contact</Go></li>
        </ul>
      </Navbar.Collapse>

      <div className="bottom-full-spacer-nav container-fluid">
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
      </div>


    </Navbar>

  );
};

export default withRouter(NavBar);
