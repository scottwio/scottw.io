import { ProjectsModel } from './projectsModel';
import { ActionTypes } from '../actionsTypes';
import { projectsActions } from './projectsActions';

function projectsReducer(state: ProjectsModel = new ProjectsModel(), action: ActionTypes) {
  switch (action.type) {
    case projectsActions.GET_PROJECTS_SUCCESS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export {projectsReducer};
