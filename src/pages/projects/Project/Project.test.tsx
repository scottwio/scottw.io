import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Project } from './Project';
import { ProjectModel } from '../../../store/projects/projectsModel';

it('renders', () => {
  const getProjects = jest.fn();
  const link = jest.fn();
  const project = new ProjectModel();
  const div = document.createElement('div');

  ReactDOM.render(
        <Project getProjects={getProjects} link={link} {...project} />
    , div);
});