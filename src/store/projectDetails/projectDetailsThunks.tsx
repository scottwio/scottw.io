import { fetchProjectDetails } from '../../lib/projectService';
import { getProjectDetailsSucess, getProjectDetailsError } from './projectDetailsActions';

export function getProjectsDetailsAction(uri: string) {  
  return (dispatch: any) => {
    return fetchProjectDetails(uri).then(
      res => dispatch(getProjectDetailsSucess(res)),
      error => dispatch(getProjectDetailsError(error))
    );
  };
}