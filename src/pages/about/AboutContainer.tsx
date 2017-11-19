import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { About } from './About';
import { geAboutAction } from '../../store/about';

const mapStateToProps = (state, ownProps) => {
  return {
    about: state.about
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAbout: (uri: string) => {
      dispatch(geAboutAction());
    },
  };
};

const AboutContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

export { AboutContainer };