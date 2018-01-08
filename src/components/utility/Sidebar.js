import React from 'react';
import { withRouter } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';

const Sidebar = ({showNav}) => {

  // const imageStyling = {
  //   height: 200,
  //   width: 'auto',
  //   borderRadius: 150,
  //   marginLeft: 50
  // };

  return(
    <SideNav
      showNav        =  {showNav}
      title          =  "Contact me..."
      titleStyle     =  {{backgroundColor: '#111314'}}
      itemStyle      =  {{backgroundColor: '#111314'}}
      itemHoverStyle =  {{backgroundColor: '#5CD0EF'}}
      navStyle       =  {{
        backgroundColor: '#111314',
        fontSize: '18px'
        // minWidth: 500
      }}
      items={[
        <div key={1}><i className="fa fa-linkedin-square" aria-hidden="true"></i><a href="https://www.linkedin.com/in/wilson-espina" target="blank" className="sidebar-link"> LinkedIn</a></div>,
        <div key={2}><i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/wilsonespina" target="blank" className="sidebar-link"> GitHub</a></div>,
        <div key={3}><i className="fa fa-twitter-square" aria-hidden="true"></i><a href="https://twitter.com/Wilson_Espina" target="blank" className="sidebar-link"> Twitter</a></div>,
        <div key={4}><img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/generalassembly_icon.png" className="ga-icon" /><a href="#" target="blank" className="sidebar-link"> GA Profile</a></div>,
      ]} />
  );
};

export default withRouter(Sidebar);
