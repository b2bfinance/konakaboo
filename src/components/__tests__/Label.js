import React from 'react';
import { render } from 'enzyme';
import Label from '../Label';

test('<Label /> renders correctly', () => {
  expect(render(<Label />)).toMatchSnapshot();
});
