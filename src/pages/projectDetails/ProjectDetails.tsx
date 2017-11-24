import * as React from 'react';
import { ProjectDetailsModel } from '../../store/projectDetails';
import './ProjectDetails.css';
import { Loading } from '../../core/Loading/Loading';

class ProjectDetails extends React.Component {
  props: any;
  projectDetails: ProjectDetailsModel;
  componentWillMount() {
    if (this.props.match && this.props.match.params.uri) {
      this.props.getProjectDetails(this.props.match.params.uri);
    }
  }
  render() {
    return (
      <div className="u-fullHeight">
        {this.props.projectDetails ?
          <section>
            <div className="ProjectDetails">

              {/* IMAGE */}
              {this.props.projectDetails.heroImage ?
              <div className="ProjectDetails-hero">
                <div className="ProjectDetails-hero-bg"
                  style={{ background: `url(${this.props.projectDetails.heroImage.url}) no-repeat ${this.props.projectDetails.heroImage.positionX} center` }}
                />
                <Loading />
              </div>
              : ''}

              {/* DETAILS */}
              <div className="u-container u-side-pad">
                <h1>{this.props.projectDetails.title}</h1>
                <p>{this.props.projectDetails.description}</p>
                {this.props.projectDetails.link ?
                  <a
                    className="ProjectDetails-link"
                    href={this.props.projectDetails.link.url}
                  > <span />{this.props.projectDetails.link.text}
                  </a> : ''}

                {/* ICONS */}
                {this.props.projectDetails.icons ?
                  <div className="ProjectDetails-icons">
                    {this.props.projectDetails.icons.map((icon) => (<span key={icon.id}>{icon.key}</span>))}
                  </div> : ''}

                <div className="ProjectDetails-images" />
              </div>

            </div>

            {/* LINKS */}
            {this.props.projectDetails.links ?
            <footer className="Links">
              <div className="u-container u-side-pad">
                {this.props.projectDetails.links.map((link) => (
                  <span>
                    <h4>{link.title}</h4>
                    <ul>
                      {link.items.map((item) => (
                        <li key={item.link}>
                          <a href={item.url}>{item.text}</a>
                        </li>))}
                    </ul>
                  </span>
                ))}
              </div>
            </footer> : ''}

          </section>
          :
          <div> loading...π </div>
          }
      </div>
    );
  }
}

export { ProjectDetails }; 