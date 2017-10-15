import { fetchProjects } from '../lib/projectService';

interface IGetProjectSucess {
  type: string;
  payload: ProjectsModel;
}

const getProjectSuccessAction = 'GET_PROJECTS_SUCCESS';
export const getProjectSucess = (payload): IGetProjectSucess => {
  return {
    type: getProjectSuccessAction,
    payload
  };
};

const getProjectErrorAction = 'GET_PROJECTS_ERROR';
export const getProjectError = (payload) => {
  return {
    type: getProjectErrorAction,
    payload
  };
};

// reducer
function projectsReducer(state: ProjectsModel = new ProjectsModel(), action: any) {
  switch (action.type) {
    case getProjectSuccessAction:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

// thunks 
function getProjectsAction() {  
    return function (dispatch: any) {
      return fetchProjects().then(
        res => dispatch(getProjectSucess(res)),
        error => dispatch(getProjectError(error))
      );
    };
  }

// modal
class ProjectsModel {
  items: ProjectModel[] = [];
}

class ProjectModel {
  title: string;
  icons: ProjectIconModel[] = [];
  uri: string; 
}

class ProjectIconModel {
  name: string;
  key: string;
  id: number;
}

export { projectsReducer, getProjectsAction, ProjectModel, ProjectIconModel }; 