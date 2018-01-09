import { aboutActionTypes } from './about/aboutActions';
import { menuActionTypes } from './menu/menuActions';
import { projectDetailTypes } from './projectDetails/projectDetailsActions';
import { projectsTypes } from './Projects/projectsActions';

export type ActionTypes = | aboutActionTypes | menuActionTypes | projectDetailTypes | projectsTypes;