import { connect } from 'react-redux';
import { toggleMenu } from '../reducers/menu';
import { Menu } from '../core/Menu/Menu';
import { push } from 'react-router-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    menu: state.menu
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOpenMenu: () => {
      dispatch(toggleMenu());
    },
    link: (url) => {
      dispatch(push(url));
    }
  };
};

const MenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);

export  {MenuContainer};