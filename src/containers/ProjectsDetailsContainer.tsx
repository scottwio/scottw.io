import { connect } from 'react-redux';
import { getProjectsAction } from '../reducers/projects';
import { ProjectDetails } from '../pages/projectDetails/ProjectDetails';

const mapStateToProps = (state, ownProps) => {
  return {
    projectDetails: state.projects
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjects: () => {
      dispatch(getProjectsAction());
    }
  };
};

const ProjectsDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);

export {ProjectsDetailsContainer};