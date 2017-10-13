import { connect } from 'react-redux';
import { getProjectsAction } from '../reducers/projects';
import { Projects } from '../pages/projects/Projects';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getProjects: () => {
      dispatch(getProjectsAction());
    },
    link: (url) => {
      dispatch(push(url));
    }
  };
};

const ProjectsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);

export {ProjectsContainer};