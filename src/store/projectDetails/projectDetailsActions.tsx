import { ProjectDetailsModel } from './projectDetailsModel';

// actions

export enum projectDetailsActions {
  GET_PROJECT_DETAILS_SUCCESS = 'GET_PROJECT_DETAILS_SUCCESS',
  GET_PROJECT_DETAILS_ERROR = 'GET_PROJECT_DETAILS_ERROR'
}

interface IGetProjectDetailsSuccess {
  type: projectDetailsActions.GET_PROJECT_DETAILS_SUCCESS;
  payload: ProjectDetailsModel;
}

export type projectDetailTypes = | IGetProjectDetailsSuccess;

// action builders

export const getProjectDetailsSucess = (payload): IGetProjectDetailsSuccess => {
  return {
    type: projectDetailsActions.GET_PROJECT_DETAILS_SUCCESS,
    payload
  };
};

export const getProjectDetailsError = (payload) => {
  return {
    type: projectDetailsActions.GET_PROJECT_DETAILS_ERROR,
    payload
  };
};