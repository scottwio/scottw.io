import * as React from 'react';
import { shallow } from 'enzyme';
import { ProjectDetails } from './ProjectDetails';
import { ProjectDetailsModel } from '../../store/projectDetails/projectDetailsModel';
import { MemoryRouter } from 'react-router';
import { ProjectGraphic } from './ProjectGraphic/ProjectGraphic';

let mockProject: ProjectDetailsModel = require('../../../public/assets/json/the-aa.json');

it('renders', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();

  shallow(
  <ProjectDetails
    projectDetails={projectDetails}
    getProjectDetails={getProjectDetails}
  />);
});

it('renders project images if given', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();
  projectDetails.images = mockProject.images;

  const wrapper = shallow(
  <ProjectDetails
    projectDetails={projectDetails}
    getProjectDetails={getProjectDetails}
  />);

  expect(wrapper.find('.ProjectDetails-images').length).toBe(1);
  expect(wrapper.find(ProjectGraphic).length).toBe(2);
});

it('renders project link if given', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();
  projectDetails.link = mockProject.link;

  const wrapper = shallow(
  <ProjectDetails
    projectDetails={projectDetails}
    getProjectDetails={getProjectDetails}
  />);

  expect(wrapper.find('.ProjectDetails-link').length).toBe(1);
});

it('renders project icons if given', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();
  projectDetails.icons = mockProject.icons;

  const wrapper = shallow(
  <ProjectDetails
    projectDetails={projectDetails}
    getProjectDetails={getProjectDetails}
  />);

  expect(wrapper.find('.ProjectDetails-icons').length).toBe(1);
  expect(wrapper.find('.ProjectDetails-icons span').length).toBe(6);
});

it('renders project hero image if given', () => {
  const getProjectDetails = jest.fn();
  const projectDetails = new ProjectDetailsModel();
  projectDetails.heroImage = mockProject.heroImage;

  const wrapper = shallow(
  <ProjectDetails
    projectDetails={projectDetails}
    getProjectDetails={getProjectDetails}
  />);

  expect(wrapper.find('.ProjectDetails-hero').length).toBe(1);
});