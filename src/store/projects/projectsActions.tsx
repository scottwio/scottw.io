import { ProjectsModel } from './projectsModel';

// actions

export enum projectsActions {
  GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS',
  GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR',
}

interface IGetProjectSuccess {
  type: projectsActions.GET_PROJECTS_SUCCESS;
  payload: ProjectsModel;
}

export type projectsTypes = | IGetProjectSuccess;

// action builders

export const getProjectSuccess = (payload): IGetProjectSuccess => {
  return {
    type: projectsActions.GET_PROJECTS_SUCCESS,
    payload
  };
};

export const getProjectError = (payload) => {
  return {
    type: projectsActions.GET_PROJECTS_ERROR,
    payload
  };
};