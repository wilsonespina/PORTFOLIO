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
      title          =  "Wilson Espina"
      titleStyle     =  {{backgroundColor: '#111314'}}
      itemStyle      =  {{backgroundColor: '#111314'}}
      itemHoverStyle =  {{backgroundColor: '#5CD0EF'}}
      navStyle       =  {{
        backgroundColor: '#111314',
        fontSize: '18px'
        // minWidth: 500
      }}
      items={[
        <a href="https://www.linkedin.com/in/wilson-espina" target="blank" className="sidebar-link"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a>,
        <a href="https://github.com/wilsonespina" target="blank" className="sidebar-link"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a>,
        <a href="https://twitter.com/Wilson_Espina" target="blank" className="sidebar-link"><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</a>,
        <a href="#" target="blank" className="sidebar-link"><img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/generalassembly_icon.png" className="ga-icon" /> GA Profile</a>,
      ]} />
  );
};

export default withRouter(Sidebar);
