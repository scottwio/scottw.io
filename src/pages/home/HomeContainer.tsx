import { connect } from 'react-redux';
import { Home } from './Home';
import { withRouter } from 'react-router';
import { toggleMenu } from '../../store/menu/menuActions';

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