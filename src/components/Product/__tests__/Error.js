import React from 'react';
import { render } from 'enzyme';
import Error from '../Error';

describe('Error', () => {
  test('renders correctly', () => {
    expect(render(<Error />)).toMatchSnapshot();
  });
});
