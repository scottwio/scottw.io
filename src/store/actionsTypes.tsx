import { aboutActionTypes } from './about/aboutActions';
import { menuActionTypes } from './menu/menuActions';
import { projectDetailTypes } from './projectDetails/projectDetailsActions';
import { projectsTypes } from './projects/projectsActions';

export type ActionTypes = | aboutActionTypes | menuActionTypes | projectDetailTypes | projectsTypes;