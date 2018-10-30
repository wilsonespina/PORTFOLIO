import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import LazyLoad from 'react-lazyload';

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
    this.state.showNav ? this.setState({ showNav: false }) : this.setState({ showNav: true });
  }

  render() {
    return (
      <Row className="container-fluid">
        <Sidebar showNav={this.state.showNav} />

        <NavBarProjects
          handleClick={this.handleClick} />

        <Row className="project-individual-section container-fluid">
          <div className="container">
            <h1 className="span-white"><span className="span-yellow">'TRACE'</span><span className="span-pink"> - </span><span className="span-pink text-small">Project 4</span></h1>

            <a href="https://portfolio-project-4.herokuapp.com/" target="blank"><div className="btn btn-info btn-large">Link on Heroku</div></a>

            <p className="span-white medium-font">My final project at General Assembly was to create a full MERN stack application with an open scope to create any site within a week. The website ended up being a social exercising platform which encourages people to compete and upload the best running traces they’ve saved on the exercise app, Strava. I combined map data received from the Strava API and with the Google Maps API to give a visual representation of run activities. My website also included the ability to rate and comment on other people’s saved runs. This project was a brilliant opportunity  to incorporate smaller features learnt on the WDI course, such as having a search and filter box on the main page.</p>

            <p className="span-white medium-font">Given that the project was only a week long, I would have loved to have worked on extra features. One such feature was to improve the overall UX experience by allowing users to choose their own waypoints on Google Maps and then send them directly to Google Navigation. I also wanted to add a customisation feature where people can choose different snazzymaps styles on their profile page.</p>

            <div className="projects-icons-box span-blue">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-webpack-plain-wordmark"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-heroku-line-wordmark"></i>
              <i className="devicon-trello-plain-wordmark"></i>
            </div>


            <div className="picture-project-series container-fluid">
              <LazyLoad height={693} throttle={300} scroll={true} resize={true}>
                <a href="https://portfolio-project-4.herokuapp.com/" target="blank">
                  <img src="../../assets/project_images/screenshot_landing.jpg" alt="project4-img1" className="project-images-screenshots" width="992" height="693" />
                </a>
              </LazyLoad>
            </div>
            <div className="picture-project-series container-fluid">
              <LazyLoad height={701} throttle={300} scroll={true} resize={true}>
                <a href="https://portfolio-project-4.herokuapp.com/" target="blank">
                  <img src="../../assets/project_images/screenshot_profile.png" alt="project4-img2" className="project-images-screenshots" width="995" height="701" />
                </a>
              </LazyLoad>
            </div>
            <div className="picture-project-series container-fluid">
              <LazyLoad height={699} throttle={300} scroll={true} resize={true}>
                <a href="https://portfolio-project-4.herokuapp.com/" target="blank">
                  <img src="../../assets/project_images/screenshot_usersshow.png" alt="project4-img3" className="project-images-screenshots" width="994" height="699" />
                </a>
              </LazyLoad>
            </div>
            <div className="picture-project-series container-fluid">
              <LazyLoad height={450} throttle={300} scroll={true} resize={true}>
                <a href="https://portfolio-project-4.herokuapp.com/" target="blank">
                  <img src="../../assets/project_images/screenshot_comments_rating.jpg" alt="project4-img4" className="project-images-screenshots" width="859" height="450" />
                </a>
              </LazyLoad>
            </div>

          </div>
        </Row>
      </Row>
    );
  }
}

export default withRouter(Project4);
