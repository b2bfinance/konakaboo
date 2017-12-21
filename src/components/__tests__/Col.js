import React from 'react';
import { render } from 'enzyme';
import Col from '../Col';

test('<Col /> renders correctly', () => {
  expect(
    render(<Col phone={25} tablet={50} desktop={100} />)
  ).toMatchSnapshot();
});
