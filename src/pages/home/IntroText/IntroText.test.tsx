import * as React from 'react';
import { shallow } from 'enzyme';
import { IntroText } from './IntroText';

it('renders without crashing', () => {
  shallow(<IntroText />);
});