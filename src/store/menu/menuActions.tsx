import { MenuModel } from './menuModel';

// action models
export enum menuActions {
  TOGGLE_MENU = 'TOGGLE_MENU'
}

export interface ItoggleMenu {
  type: menuActions.TOGGLE_MENU;
  payload: MenuModel;
}

export type menuActionTypes = | ItoggleMenu;

// action builders
export const toggleMenu = () => {
  return {
    type: menuActions.TOGGLE_MENU
  };
};