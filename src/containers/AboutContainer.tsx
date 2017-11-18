import { connect } from 'react-redux';
import { Menu } from '../core/Menu/Menu';
import { withRouter } from 'react-router';
import { fetchAbout } from '../lib/aboutService';

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAbout: (uri: string) => {
      dispatch(fetchAbout());
    },
  };
};

const AboutContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));

export { AboutContainer };