jest.mock('../../lib/projectService');
let result = require('../../../public/assets/json/projects.json');
import { getProjectsAction } from './projectsThunks';
import { fetchProjects } from '../../lib/projectService';
import { projectsActions } from './projectsActions';

it('should dispatch the success event', () => {

  fetchProjects.mockImplementation(() => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve(result),
      );
    });
  });
  
  let dispatch = jest.fn();
  expect.assertions(2);
  
  return getProjectsAction()(dispatch).then(data => {
    expect(dispatch.mock.calls[0][0].type).toBe(projectsActions.GET_PROJECTS_SUCCESS);
    expect(dispatch.mock.calls[0][0].payload).toBe(result);
  });

});

it('should dispatch the failed event', () => {

  let error = {error: 'No items found'};

  fetchProjects.mockImplementation(() => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => reject(error),
      );
    });
  });

  let dispatch = jest.fn();
  expect.assertions(2);

  return getProjectsAction()(dispatch).then(data => {
    expect(dispatch.mock.calls[0][0].type).toBe(projectsActions.GET_PROJECTS_ERROR);
    expect(dispatch.mock.calls[0][0].payload).toBe(error);
  });
  
});