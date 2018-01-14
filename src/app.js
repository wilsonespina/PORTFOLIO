import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import Footerbar from './components/utility/Footerbar';
import Routes from './components/utility/Routes';

import 'font-awesome/css/font-awesome.css';
import 'react-router-bootstrap';
import 'bootstrap-css-only';
import './scss/style.scss';

class App extends React.Component {

  render() {

    return (
      <Router>
        <Row className="container-fluid">
          <Routes />
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
