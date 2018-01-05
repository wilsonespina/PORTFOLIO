import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import Background from 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/tube_wallpaper.jpg';

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ 'Welcome...', 'I\'m Wilson Espina.', 'Web Developer.', 'From London.', 'Make yourself at home...'];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector('.animation-header').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="blinking"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 3000);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] === 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 3000);
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // console.log(dataText[i]);
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(0);
});

const Main = ({scrollTo}) => {

  return(
    <Row className="main-section section container-fluid">

      <div className="main-top-section">
        <img className="main-head-img view-height" src={'../../assets/tube_wallpaper.jpg' || 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/tube_wallpaper.jpg'} />
        <h1 className="animation-header">WELCOME</h1>
      </div>

      <Element name="main" className="element" >
        <h1 className="heading">Main Section</h1>
      </Element>

      <img src={'../../assets/HEADSHOT.png' ||'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/headshots/HEADSHOT.png'} alt="profile-img" className="profile-pic responsive-img"/>

      <h1 className="span-blue">Wilson Espina</h1>
      <h3 className="span-pink"><span className="medium-font">Welcome</span> to my <span className="large-font"><em>Portfolio....</em></span></h3>
      <h3 className="span-green">Web Developer</h3>
      <h3 className="span-white">(ex)Breakdancer</h3>


      {/* <a onClick={scrollTo}>To the top!</a> */}
    </Row>
  );
};

export default withRouter(Main);
