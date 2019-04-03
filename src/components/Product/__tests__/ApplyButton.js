import React from 'react';
import { render } from 'enzyme';
import ApplyButton from '../ApplyButton';

describe('ApplyButton', () => {
  test('renders correctly', () => {
    expect(
      render(<ApplyButton theme={stubData.theme}>apply</ApplyButton>)
    ).toMatchSnapshot();
  });
});
