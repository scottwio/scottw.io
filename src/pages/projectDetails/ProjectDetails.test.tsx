import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProjectDetails } from './ProjectDetails';
import { ProjectDetailsModel } from '../../store/projectDetails/projectDetailsModel';
import { MemoryRouter } from 'react-router';

it('renders', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();
  const div = document.createElement('div');

  ReactDOM.render(
      <MemoryRouter>
        <ProjectDetails 
          projectDetails={projectDetails} 
          getProjectDetails={getProjectDetails}
        />
      </MemoryRouter>
    , div);
});