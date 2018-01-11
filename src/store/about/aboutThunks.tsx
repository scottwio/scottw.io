import { getAboutError, getAboutSuccess } from './aboutActions';
import { fetchAbout } from '../../lib/aboutService';

export function getAboutAction() {  
  return (dispatch: any) => {
    return fetchAbout().then(
      res => dispatch(getAboutSuccess(res)),
      error => dispatch(getAboutError(error))
    );
  };
}