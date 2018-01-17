jest.mock('../../lib/aboutService');

let result = require('../../../public/assets/json/about.json');
import { fetchAbout } from '../../lib/aboutService';
import { getAboutAction } from './aboutThunks';
import { aboutActions } from './aboutActions';

it('should dispatch the success event', () => {

  fetchAbout.mockImplementation(() => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => resolve(result),
      );
    });
  });
  
  let dispatch = jest.fn();
  expect.assertions(2);
  
  return getAboutAction()(dispatch).then(data => {
    expect(dispatch.mock.calls[0][0].type).toBe(aboutActions.GET_ABOUT_SUCCESS);
    expect(dispatch.mock.calls[0][0].payload).toBe(result);
  });

});

it('should dispatch the failed event', () => {

  let error = {error: 'No items found'};

  fetchAbout.mockImplementation(() => {
    return new Promise((resolve, reject) => {
      process.nextTick(
        () => reject(error),
      );
    });
  });

  let dispatch = jest.fn();
  expect.assertions(2);

  return getAboutAction()(dispatch).then(data => {
    expect(dispatch.mock.calls[0][0].type).toBe(aboutActions.GET_ABOUT_ERROR);
    expect(dispatch.mock.calls[0][0].payload).toBe(error);
  });
  
});