import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Footerbar = ({scrollTo}) => {

  return(
    <Navbar fluid className="footerbar">
      <div className="spacer-halfblack"></div>
      <div className="colour-bar-nav">
        <div className="spacer-nav spacer-pink"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-yellow"></div>
        <div className="spacer-nav spacer-pink"></div>
        <div className="spacer-nav spacer-blue"></div>
        <div className="spacer-nav spacer-green"></div>
        <div className="spacer-nav spacer-yellow"></div>
      </div>
      <div className="spacer-halfblack"></div>
      <div className="icon-bar">
        <a href="mailto:wilson.espina@gmail.com" className="sidebar-link"><i className="fa fa-envelope" aria-hidden="true"></i></a>

        <a href="https://www.linkedin.com/in/wilson-espina" target="blank" className="sidebar-link"> <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>

        <a href="https://github.com/wilsonespina" target="blank" className="sidebar-link"><i className="fa fa-github" aria-hidden="true"></i></a>

        <a href="https://twitter.com/Wilson_Espina" target="blank" className="sidebar-link"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>

        {/* <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/generalassembly_icon.png" className="ga-icon" /><a href="#" target="blank" className="sidebar-link"> GA Profile</a> */}
      </div>
    </Navbar>
  );
};

export default withRouter(Footerbar);
