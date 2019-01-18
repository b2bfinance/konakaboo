import React from 'react';
import { render } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  test('renders correctly', () => {
    expect(
      render(<Button theme={stubData.theme}>button</Button>)
    ).toMatchSnapshot();
  });
});
