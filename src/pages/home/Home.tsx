import * as React from 'react';
import { IntroText } from './IntroText/IntroText';
import './Home.css';

class Home extends React.Component {
  props: any;
  render() {
    return (
      <div className="Home">
        <IntroText />
      </div>
    );
  }
}

export {Home};