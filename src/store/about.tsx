import { fetchAbout } from '../lib/aboutService';

interface IGetAboutSuccess {
  type: string;
  payload: AboutModel;
}

const getAboutSuccessAction = 'GET_ABOUT_SUCCESS';
export const getAboutSucess = (payload): IGetAboutSuccess => {
  return {
    type: getAboutSuccessAction,
    payload
  };
};

const getAboutErrorAction = 'GET_ABOUT_ERROR';
export const getAboutError = (payload) => {
  return {
    type: getAboutErrorAction,
    payload
  };
};

// reducer
function aboutReducer(state: AboutModel = new AboutModel(), action: any) {
  switch (action.type) {
    case getAboutSuccessAction:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

// thunks 
function geAboutAction() {  
    return (dispatch: any) => {
      return fetchAbout().then(
        res => dispatch(getAboutSucess(res)),
        error => dispatch(getAboutError(error))
      );
    };
  }

// modal
class AboutModel {
  title: any;
  icons: any;
  uri: string; 
}

export { aboutReducer, geAboutAction }; 