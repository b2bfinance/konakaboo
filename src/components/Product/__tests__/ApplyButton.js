import React from 'react';
import { render } from 'enzyme';
import ApplyButton from '../ApplyButton';

describe('ApplyButton', () => {
  test('renders correctly', () => {
    expect(render(<ApplyButton>apply</ApplyButton>)).toMatchSnapshot();
  });
});
