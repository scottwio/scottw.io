import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { About } from './About';
import { getAboutAction } from '../../store/about/aboutThunks';

const mapStateToProps = (state, ownProps) => {
  return {
    about: state.about
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAbout: (uri: string) => {
      dispatch(getAboutAction());
    },
  };
};

const AboutContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(About));

export { AboutContainer };
