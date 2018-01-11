import { AboutModel } from './aboutModel';

// action models
export enum aboutActions {
  GET_ABOUT_SUCCESS = 'GET_ABOUT_SUCCESS',
  GET_ABOUT_ERROR = 'GET_ABOUT_ERROR',
}

export interface IGetAboutSuccess {
  type: aboutActions.GET_ABOUT_SUCCESS;
  payload: AboutModel;
}

export interface IGetAboutError {
  type: aboutActions.GET_ABOUT_ERROR;
  payload: any;
}

export type aboutActionTypes = | IGetAboutSuccess | IGetAboutError;

// action builders
export const getAboutSuccess = (payload): IGetAboutSuccess => {
  return {
    type: aboutActions.GET_ABOUT_SUCCESS,
    payload
  };
};

export const getAboutError = (payload): IGetAboutError => {
  return {
    type: aboutActions.GET_ABOUT_ERROR,
    payload
  };
};