import { connect } from 'react-redux';
import { ProjectDetails } from './ProjectDetails';
import { withRouter } from 'react-router';
import { getProjectsDetailsAction } from '../../store/projectDetails/projectDetailsThunks';

const mapStateToProps = (state, ownProps) => {
  return {
    projectDetails: state.projectDetails[ownProps.match.params.uri]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjectDetails: (uri: string) => {
      dispatch(getProjectsDetailsAction(uri));
    }
  };
};

const ProjectsDetailsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetails));

export { ProjectsDetailsContainer };