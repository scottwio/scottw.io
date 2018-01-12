
import { projectDetailsActions } from './projectDetailsActions';
import { ProjectDetailsModel } from './projectDetailsModel';
import { ActionTypes } from '../actionsTypes';

export const projectDetailsReducer = (state: ProjectDetailsModel = new ProjectDetailsModel(), action: ActionTypes) => {
  switch (action.type) {
    case projectDetailsActions.GET_PROJECT_DETAILS_SUCCESS:
      return Object.assign({}, state, {[action.payload.uri]: action.payload});
    default:
      return state;
  }
};