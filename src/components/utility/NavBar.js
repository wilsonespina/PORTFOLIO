import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar = ({ history }) => {
  return(
    <nav className="navbar navBar navbar-static-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Wilson Espina</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="#">projects</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </div>
    </nav>

  );
};

export default withRouter(NavBar);
