import { connect } from 'react-redux';
import { ProjectDetails } from '../pages/projectDetails/ProjectDetails';
import { getProjectsDetailsAction } from '../reducers/projectDetails';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    projectDetails: state.projectDetails,
    projectUri: ownProps.match.params.uri
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjectDetails: (uri: string) => {
      dispatch(getProjectsDetailsAction(uri));
    },
    link: (url) => {
      dispatch(push(url));
    }
  };
};

const ProjectsDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);

export {ProjectsDetailsContainer};