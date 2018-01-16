import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import Main from './Main';
import About from '../utility/About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from '../utility/Contact';
import NavBar from '../utility/NavBar';
import Sidebar from '../utility/Sidebar';

class Body extends React.Component {
  state = {
    showNav: false
  }

  componentDidMount() {
    this.scrollToTop();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  handleClick = (e) => {
    e.stopPropagation();
    this.state.showNav ? this.setState({showNav: false}) : this.setState({showNav: true});
  }

  render() {
    console.log(this.state);

    return(
      <Row className="container-fluid" id="body-all-padding">
        <Sidebar showNav={this.state.showNav} />
        <NavBar
          handleClick={this.handleClick} />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Row>
    );
  }
}

export default withRouter(Body);
