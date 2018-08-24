import React from 'react';
import Header from '../Header';
import { render } from 'enzyme';

describe('Header', () => {
  test('renders correctly', () => {
    expect(render(<Header />)).toMatchSnapshot();
  });
});
