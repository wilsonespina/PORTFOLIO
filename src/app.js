import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import NavBar from './components/utility/NavBar'
import Main from './components/main/Main'
import Projects from './components/main/Projects'
import About from './components/utility/About'
import Contact from './components/utility/Contact'

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import 'font-awesome/css/font-awesome.css';
import 'react-router-bootstrap';
import 'bootstrap-css-only';
import './scss/style.scss';

const durationFn = function(deltaTop) {
  return deltaTop;
};

class App extends React.Component {

  constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    this.scrollToTop();

    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

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
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <Router>
        <div>

          
          <NavBar
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo} />
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

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
