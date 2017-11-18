import { connect } from 'react-redux';
import { Home } from '../pages/home/Home';
import { toggleMenu } from '../store/menu';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleMenu());
    }
  };
};

const HomeContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

export  { HomeContainer };