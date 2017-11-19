import * as React from 'react';
import './IntroText.css';
import { Link } from 'react-router-dom';

class IntroText extends React.Component {
  render() {
    return (
      <div className="IntroText">
        <h2>Hi, my name is Scott Williams</h2>
        <h3>
          I’m a front-end developer and self confessed code and design geek working in 
          and around London. Here you will find some of the <Link to="/projects">+ projects</Link> I have 
          been working on recently.
        </h3>
      </div>
    );
  }
}

export {IntroText};