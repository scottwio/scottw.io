import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Projects } from './Projects';
import { ProjectsModel } from '../../store/projects/projectsModel';

it('renders', () => {
  const getProjects = jest.fn();
  const link = jest.fn();
  const projects = new ProjectsModel();
  const div = document.createElement('div');

  ReactDOM.render(
        <Projects getProjects={getProjects} link={link} projects={projects} />
    , div);
});