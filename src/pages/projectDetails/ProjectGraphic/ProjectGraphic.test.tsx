import * as React from 'react';
import { shallow } from 'enzyme';
import { ProjectGraphic } from './ProjectGraphic';

it('renders without crashing', () => {
  const image = {type: 'phone'};
  shallow(<ProjectGraphic image={image}/>);
});

it('shows phone graphic', () => {
  const image = {type: 'phone'};
  const wrapper = shallow(<ProjectGraphic image={image}/>);
  expect(wrapper.find('.ProjectGraphic-bg').prop('src')).toEqual('/assets/images/phone.svg');
});

it('shows desktop graphic', () => {
  const image = {type: 'desktop'};
  const wrapper = shallow(<ProjectGraphic image={image}/>);
  expect(wrapper.find('.ProjectGraphic-bg').prop('src')).toEqual('/assets/images/desktop.svg');
});