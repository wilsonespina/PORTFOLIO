import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import LazyLoad from 'react-lazyload';

import NavBarProjects from '../utility/NavBarProjects';
import Sidebar from '../utility/Sidebar';

class Project2 extends React.Component {
  state = {
    showNav: false
  }

  componentWillMount() {
    // this.scrollToTop();
    window.scrollTo(0, 0);
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

            <h1 className="span-white"><span className="span-yellow">'KatSuper Store'</span><span className="span-pink"> - </span><span className="span-pink text-small">Project 2</span></h1>

            <a href="https://portfolio-project-2.herokuapp.com/" target="blank"><div className="btn btn-info btn-large">Link on Heroku</div></a>

            <p className="span-white medium-font">For my second major project at GA, I created my first fully RESTful application with backend authentication using Express.js Sessions. This project was my first opportunity to get to grips with an application that demonstrated the create, read update, delete (CRUD) functionality found in most websites.</p>

            <p className="span-white medium-font">During the course at GA, my coursemates and I often got food from a local food market near the campus. One particular Japanese Katsu wrap stall stood out and in tribute to that stall I chose to create site all about the best Katsu spot in London. The app uses embedded JavaScript (EJS) to render views in the browser and users can add, rate and comment on their favourite katsu curry places.</p>

            <div className="projects-icons-box span-blue">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain-wordmark skill-icon"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-bootstrap-plain-wordmark"></i>
              <i className="devicon-nodejs-plain-wordmark"></i>
              <i className="devicon-mongodb-plain-wordmark"></i>
              <i className="devicon-gulp-plain"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-github-plain-wordmark"></i>
              <i className="devicon-heroku-line-wordmark"></i>
              <i className="devicon-trello-plain-wordmark"></i>
            </div>

            <div className="picture-project-series container-fluid">
              <a href="https://portfolio-project-2.herokuapp.com/" target="blank">
                <LazyLoad height={1000} throttle={2000}>
                  <img src="../../assets/screenshot_landingpage.jpg" alt="project2-img2" className="project-images-screenshots" />
                </LazyLoad>
              </a>
            </div>
            <div className="picture-project-series container-fluid">
              <a href="https://portfolio-project-2.herokuapp.com/" target="blank">
                <LazyLoad height={1000} throttle={2000}>
                  <img src="../../assets/project_images/screenshot_indexpage.jpg" alt="project2-img2" className="project-images-screenshots" />
                </LazyLoad>
              </a>
            </div>
            <div className="picture-project-series container-fluid">
              <a href="https://portfolio-project-2.herokuapp.com/" target="blank">
                <LazyLoad height={1000} throttle={2000}>
                  <img src="../../assets/project_images/screenshot_registerpage.jpg" alt="project2-img3" className="project-images-screenshots" />
                </LazyLoad>
              </a>
            </div>
            <div className="picture-project-series container-fluid">
              <a href="https://portfolio-project-2.herokuapp.com/" target="blank">
                <LazyLoad height={1000} throttle={2000}>
                  <img src="../../assets/project_images/screenshot_showpage.jpg" alt="project2-img4" className="project-images-screenshots" />
                </LazyLoad>
              </a>
            </div>

          </div>
        </Row>
      </Row >
    );
  }
}

export default withRouter(Project2);
