import { fetchProjectDetails } from '../lib/projectService';

interface IGetProjectDetailsSucess {
  type: string;
  payload:  ProjectDetailsModel;
}

// actions
const getProjectDetailsSuccessAction = 'GET_PROJECT_DETAILS_SUCCESS';
export const getProjectDetailsSucess = (payload): IGetProjectDetailsSucess => {
  return {
    type: getProjectDetailsSuccessAction,
    payload
  };
};

const getProjectDetailsErrorAction = 'GET_PROJECT_DETAILS_ERROR';
export const getProjectDetailsError = (payload) => {
  return {
    type: getProjectDetailsErrorAction,
    payload
  };
};

// reducer
function projectDetailsReducer(state: ProjectDetailsModel = new ProjectDetailsModel(), action: any) {
  switch (action.type) {
    case getProjectDetailsSuccessAction:
      // extends the projectDetails store 
      return Object.assign({}, state, {[action.payload.uri]: action.payload});
    default:
      return state;
  }
}

// thunks 
function getProjectsDetailsAction(uri: string) {  
    return function (dispatch: any) {
      return fetchProjectDetails(uri).then(
        res => dispatch(getProjectDetailsSucess(res)),
        error => dispatch(getProjectDetailsError(error))
      );
    };
  }

// modal
class ProjectDetailsLink {
    text: string;
    url: string;
}

class ProjectDetailsImage {
    type: string;
    url: string;
}

class ProjectDetailsHero {
  positionX: string;
  url: string;
}

class ProjectDetailsIcon {
    name: string;
    id: number;
    key: string;
}

class ProjectDetailsMoreWork {
    text: string;
    uri: string;
}

class ProjectDetailsModel {
    uri: string;
    heroImage: ProjectDetailsHero;
    title: string;
    description: string;
    link: ProjectDetailsLink;
    images: ProjectDetailsImage[];
    icons: ProjectDetailsIcon[];
    moreWork: ProjectDetailsMoreWork[];
}  

export { projectDetailsReducer, getProjectsDetailsAction, ProjectDetailsModel }; 