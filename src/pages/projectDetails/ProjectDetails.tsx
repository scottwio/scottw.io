import * as React from 'react';
import { ProjectDetailsModel } from '../../store/projectDetails';
import './ProjectDetails.css';
import { Link } from 'react-router-dom';

class ProjectDetails extends React.Component {
  props: any;
  projectDetails: ProjectDetailsModel; 
  componentWillMount() {
    if (this.props.match && this.props.match.params.uri) {
      this.props.getProjectDetails(this.props.match.params.uri);
    }
  }
  componentWillReceiveProps(nextProps: any) {
    // on change set the project details
    this.projectDetails = nextProps.projectDetails[nextProps.projectUri];
  }
  render() {
    return (
    <div className="u-fullHeight">
      { this.projectDetails ? 
        <div className="ProjectDetails">
            {this.projectDetails.heroImage ? 
              <div 
                className="ProjectDetails-hero" 
                style={{background: `url(${this.projectDetails.heroImage.url}) no-repeat ${this.projectDetails.heroImage.positionX} center`}} 
              /> : ''
            }
          <div className="u-container u-side-pad">
            <h1>{this.projectDetails.title}</h1>
            <p>{this.projectDetails.description}</p>
            {this.projectDetails.link ? 
            <a 
              className="ProjectDetails-link" 
              href={this.projectDetails.link.url}
            > <span />{this.projectDetails.link.text}
            </a> : ''}
            <div className="ProjectDetails-icons">
              {this.projectDetails.icons.map((icon) => (<span key={icon.id}>{icon.key}</span>))}
            </div>

            <div className="ProjectDetails-images" />
          </div>
        </div>
      : '' }
      { this.projectDetails ? 
      <footer className="MoreWork">
        <div className="u-container u-side-pad">
          <h4>More work</h4>
          <ul>
            {this.projectDetails.moreWork.map((work) => (
            <li key={work.uri}>
              <Link to={`/project-details/${work.uri}`}>{work.text}</Link>
            </li>))}
          </ul>
        </div>
      </footer>
      : '' }
    </div>
    );
  }
}

export {ProjectDetails}; 