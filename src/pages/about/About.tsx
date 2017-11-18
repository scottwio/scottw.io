import * as React from 'react';
import './About.css';
import { ProjectDetails } from '../projectDetails/ProjectDetails';

class About extends React.Component {
  props: any;
  componentWillMount() {
   this.props.getAbout();
  }
  render() {
    return (
      <ProjectDetails  projectDetails={{}}/>
    );
  }
}

export {About};