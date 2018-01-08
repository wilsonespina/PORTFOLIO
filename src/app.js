import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import NavBar from './components/utility/NavBar';
import Main from './components/main/Main';
import Projects from './components/main/Projects';
import About from './components/utility/About';
import Contact from './components/utility/Contact';
import Sidebar from './components/utility/Sidebar';
import Footerbar from './components/utility/Footerbar';

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
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo('main', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -50
    });
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
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

          <Sidebar
            showNav={this.state.showNav} />

          <Main
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <About
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <Projects
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <Contact
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
          <Footerbar />
        </Row>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
