import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

// import Background from 'https://s3-eu-west-1.amazonaws.com/wdi-30-ldn/portfolio/tube_wallpaper.jpg';

document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ 'Welcome...', 'I\'m Wilson Espina.', 'Web Developer.', 'From London.' ];

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector('h1.animation-header').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="blinking"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback);
      }, 80);

    // text finished, call callback if there is a callback function
    } else if (typeof fnCallback === 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 1200);
    }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
    if (typeof dataText[i] === 'undefined'){
      setTimeout(function() {
        StartTextAnimation(0);
      }, 2000);

    // check if dataText[i] exists
    } else if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function(){
        // console.log(dataText[i]);
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
  StartTextAnimation(200);
});

const Main = () => {

  return(
    <Row className="main-section section">

      <Element name="main" className="element" >
        <div className="main-top-section">
          <img className="main-head-img view-height" src={'../../assets/tube_compressed.jpg'} />
          <div className="typewriter">
            <h1 className="animation-header"> </h1>
          </div>
        </div>
      </Element>


    </Row>
  );
};

export default withRouter(Main);
