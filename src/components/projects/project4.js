import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';

import NavBarProjects from '../utility/NavBarProjects';
import Sidebar from '../utility/Sidebar';

class Project4 extends React.Component {
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

  render(){
    return(
      <Row className="container-fluid">
        <Sidebar showNav={this.state.showNav} />

        <NavBarProjects
          handleClick={this.handleClick} />

        <Row className="project-individual-section container-fluid">
          <div className="container">
            <h1 className="span-pink">Project 4</h1>
            <Link to="/">back</Link>

            <p className="span-white">My final project at General Assembly was to create a full MERN stack application with an open scope to create any site within a week. The website ended up being a social exercising platform which encourages people to compete and upload the best running traces they’ve saved on the exercise app, Strava. I combined map data received from the Strava API and with the Google Maps API to give a visual representation of run activities. My website also included the ability to rate and comment on other people’s saved runs. This project was a brilliant opportunity  to incorporate smaller features learnt on the WDI course, such as having a search and filter box on the main page.</p>

            <p>Given that the project was only a week long, I would have loved to have worked on extra features. One such feature was to improve the overall UX experience by allowing users to choose their own waypoints on Google Maps and then send them directly to Google Navigation. I also wanted to add a customisation feature where people can choose different snazzymaps styles on their profile page.</p>
          </div>
        </Row>
      </Row>
    );
  }
}

export default withRouter(Project4);
