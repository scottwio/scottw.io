import { connect } from 'react-redux';
import { Home } from '../pages/home/Home';
import { toggleMenu } from '../reducers/menu';

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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export  {HomeContainer};