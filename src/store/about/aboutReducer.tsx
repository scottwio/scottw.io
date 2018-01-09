import { AboutModel } from './aboutModel';
import { ActionTypes } from '../actionsTypes';
import { aboutActions } from './aboutActions';

export function aboutReducer(state: AboutModel = new AboutModel(), action: ActionTypes) {
  switch (action.type) {
    case aboutActions.GET_ABOUT_SUCCESS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}