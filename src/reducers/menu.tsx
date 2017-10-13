// actions
const toggleMenuAction = 'TOGGLE_MENU';
const toggleMenu = () => {
  return {
    type: toggleMenuAction,
  };
};

// reducer
function menuReducer(state: MenuModel = new MenuModel(), action: any) {
  switch (action.type) {
    case toggleMenuAction:
      return Object.assign({}, state, {open: !state.open});
    default:
      return state;
  }
}

// modal
class MenuModel {
  public open = false;
}

export { menuReducer, toggleMenu, MenuModel}; 