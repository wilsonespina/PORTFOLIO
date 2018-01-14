import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
require('react-bootstrap/lib/NavbarHeader');
require('react-bootstrap/lib/NavbarToggle');
require('react-bootstrap/lib/NavbarCollapse');



const NavBarProjects = ({ handleClick }) => {
  return(
    <Navbar fixedTop fluid className="navBar">
      <Navbar.Header className="navbar-header">
        <i className="fa fa-bars" aria-hidden="true" onClick={handleClick} id="menu-icon"></i>

        <div className="center-logo-we">
          <Link to="/"><img src="../../assets/WE_Logo_Black.png" alt="logo" className="we-logo" /></Link>
        </div>
      </Navbar.Header>

      <Navbar.Toggle />


      <Navbar.Collapse className="full-navbar">
        <ul className="nav navbar-nav pull-right">
          <li><Link to="/">home</Link></li>
          <NavDropdown eventKey={1} title="projects" id="basic-nav-dropdown">
            <MenuItem eventKey={1.2} href="/project1">project 1</MenuItem>
            <MenuItem eventKey={1.3} href="/project2">project 2</MenuItem>
            <MenuItem eventKey={1.4} href="/project3">project 3</MenuItem>
            <MenuItem eventKey={1.5} href="/project4">project 4</MenuItem>
          </NavDropdown>
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

export default withRouter(NavBarProjects);
