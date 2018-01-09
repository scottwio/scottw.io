import { fetchProjects } from '../../lib/projectService';
import { getProjectSuccess, getProjectError } from './projectsActions';

export function getProjectsAction() {  
  return (dispatch: any) => {
    return fetchProjects().then(
      res => dispatch(getProjectSuccess(res)),
      error => dispatch(getProjectError(error))
    );
  };
}
