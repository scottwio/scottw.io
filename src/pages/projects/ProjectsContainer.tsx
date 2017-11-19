import { connect } from 'react-redux';
import { getProjectsAction } from '../../store/projects';
import { Projects } from './Projects';
import { withRouter } from 'react-router';

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
      ownProps.history.push(url);
    }
  };
};

const ProjectsContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Projects));

export { ProjectsContainer };