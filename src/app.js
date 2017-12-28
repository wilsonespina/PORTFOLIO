import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

import NavBar from './components/utility/NavBar';
import Main from './components/main/Main';
import Projects from './components/main/Projects';
import About from './components/utility/About';
import Contact from './components/utility/Contact';
// import Sidebar from './components/utility/Sidebar'

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import 'font-awesome/css/font-awesome.css';
import 'react-router-bootstrap';
import 'bootstrap-css-only';
import './scss/style.scss';

const durationFn = function(deltaTop) {
  return deltaTop;
};

class App extends React.Component {

  state = { showNav: false }

  componentDidMount() {

    this.scrollToTop();

    // Events.scrollEvent.register('begin', function() {
    //   console.log('begin', arguments);
    // });
    //
    // Events.scrollEvent.register('end', function() {
    //   console.log('end', arguments);
    // });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({showNav: true});
  }

  render() {
    console.log(this.state);

    return (
      <Router>
        <Row className="container-fluid">
          <NavBar
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo}
            showNav={this.state.showNav}
            handleClick={this.handleClick}/>

          <SideNav
            showNav        =  {this.state.showNav}
            onHideNav      =  {() => this.setState({showNav: false})}
            title          =  "Wilson Espina"
            titleStyle     =  {{backgroundColor: '#111314'}}
            itemStyle      =  {{backgroundColor: '#111314'}}
            itemHoverStyle =  {{backgroundColor: '#5CD0EF'}}
            navStyle       =  {{
              backgroundColor: '#111314',
              width: '1000px'
            }}
            items={[
              <p>LinkedIn</p>,
              <p>GitHub</p>,
              <p>GA Profile</p>,
            ]} />

          <Main
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <Projects
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <About
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <Contact
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          {/* </Col> */}


        </Row>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
