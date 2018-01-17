import * as React from 'react';
import { shallow } from 'enzyme';
import { About } from './About';

it('renders without crashing', () => {
  const getAbout = jest.fn();

  shallow(<About getAbout={getAbout} />);
});