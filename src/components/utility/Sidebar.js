import React from 'react';
import { withRouter } from 'react-router-dom';
import SideNav from 'react-simple-sidenav';

const Sidebar = ({showNav}) => {

  return(
    <SideNav
      showNav        =  {showNav}
      title          =  "Find me on..."
      titleStyle     =  {{backgroundColor: '#111314'}}
      itemStyle      =  {{backgroundColor: '#111314'}}
      itemHoverStyle =  {{backgroundColor: '#5CD0EF'}}
      navStyle       =  {{
        backgroundColor: '#111314',
        fontSize: '18px'
        // minWidth: 500
      }}
      items={[
        <a key={1} href="https://www.linkedin.com/in/wilson-espina" target="blank" className="sidebar-link"><div><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</div></a>,
        <a key={2} href="https://github.com/wilsonespina" target="blank" className="sidebar-link"><div ><i className="fa fa-github" aria-hidden="true"></i> GitHub</div></a>,
        <a key={3} href="https://twitter.com/Wilson_Espina" target="blank" className="sidebar-link"><div ><i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</div></a>
        // <a key={4} href="#" target="blank" className="sidebar-link"><div><img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/generalassembly_icon.png" className="ga-icon" /> GA Profile</div></a>
      ]} />
  );
};

export default withRouter(Sidebar);
