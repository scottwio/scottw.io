import * as React from 'react';
import './Projects.css';
import { Project } from './Project/Project';

class Projects extends React.Component {
  props: any;
  componentWillMount() {
    this.props.getProjects();
  }
  render() {
    return (
      <div className="Projects">
        {this.props.projects.items.map((item) => (
          <Project link={this.props.link} key={item.uri} {...item} />
        ))}
      </div>
    );
  }
}

export {Projects};