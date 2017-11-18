import { connect } from 'react-redux';
import { ProjectDetails } from '../pages/projectDetails/ProjectDetails';
import { getProjectsDetailsAction } from '../store/projectDetails';
import { withRouter } from 'react-router';

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
      ownProps.history.push(url);
    }
  };
};

const ProjectsDetailsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetails));

export { ProjectsDetailsContainer };