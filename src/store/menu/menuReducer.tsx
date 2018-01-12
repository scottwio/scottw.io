import { MenuModel } from './menuModel';
import { menuActions } from './menuActions';
import { ActionTypes } from '../actionsTypes';

export const menuReducer = (state: MenuModel = new MenuModel(), action: ActionTypes) => {
  switch (action.type) {
    case menuActions.TOGGLE_MENU:
      return Object.assign({}, state, {open: !state.open});
    default:
      return state;
  }
};
