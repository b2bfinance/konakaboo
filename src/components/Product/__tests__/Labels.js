import React from 'react';
import { render } from 'enzyme';
import Labels from '../Labels';

describe('Labels', () => {
  test('renders correctly', () => {
    expect(render(<Labels labels={['foo', 'bar']} />)).toMatchSnapshot();
  });
});
