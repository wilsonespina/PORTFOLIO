import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import NavBar from './components/utility/NavBar';
import Sidebar from './components/utility/Sidebar';
import Footerbar from './components/utility/Footerbar';
import Routes from './components/utility/Routes';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import 'font-awesome/css/font-awesome.css';
import 'react-router-bootstrap';
import 'bootstrap-css-only';
import './scss/style.scss';


class App extends React.Component {

  state = { showNav: false }

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

    return (
      <Router>
        <Row className="container-fluid">
          <NavBar
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo}
            showNav={this.state.showNav}
            handleClick={this.handleClick} />
          <Sidebar
            showNav={this.state.showNav} />
          <Routes
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo}
            showNav={this.state.showNav}
            handleClick={this.handleClick} />
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
