import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import Background from 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/tube_wallpaper.jpg';

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Welcome...", "I'm Wilson Espina.", "Web Developer.", "From London", "Make yourself at home..."];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      document.querySelector('.animation-header').innerHTML = text.substring(0, i + 1) +'<span aria-hidden="true" class="blinking"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] == 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 3000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});






const Main = ({scrollTo}) => {

  return(
    <Row className="main-section section container-fluid">
      <div className="main-top-section">
        <img className="main-head-img" src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/tube_wallpaper.jpg"/>

        <h1 className="animation-header">Hi there</h1>



      </div>

      <Element name="main" className="element" >
        <h1 className="heading">Main Section</h1>
      </Element>


      <img src="https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/headshots/HEADSHOT.png" alt="profile-img" className="profile-pic responsive-img"/>

      <h1 className="span-blue">Wilson Espina</h1>
      <h3 className="span-pink"><span className="medium-font">Welcome</span> to my <span className="large-font"><em>Portfolio....</em></span></h3>
      <h3 className="span-green">Web Developer</h3>
      <h3 className="span-white">(ex)Breakdancer</h3>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Main);
