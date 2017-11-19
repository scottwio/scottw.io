import { connect } from 'react-redux';
import { toggleMenu } from '../../store/menu';
import { Menu } from '../Menu/Menu';
import { withRouter } from 'react-router';

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
      ownProps.router.history.push(url);
      dispatch(toggleMenu());
    }
  };
};

const MenuContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));

export { MenuContainer };