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
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
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
            scrollTo={this.scrollTo}
            scrollToWithContainer={this.scrollToWithContainer}
          />
          <Main
            scrollToTop={this.scrollToTop} />
          <Projects
            scrollToTop={this.scrollToTop} />
          <About
            scrollToTop={this.scrollToTop} />
          <Contact
            scrollToTop={this.scrollToTop} />

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
