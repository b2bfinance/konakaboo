import React from 'react';
import { render } from 'enzyme';
import Button from '../Button';

describe('<Button />', () => {
  test('primary renders correctly', () => {
    expect(render(<Button primary theme={stubData.theme} />)).toMatchSnapshot();
  });

  test('secondary renders correctly', () => {
    expect(
      render(<Button secondary theme={stubData.theme} />)
    ).toMatchSnapshot();
  });

  test('slim renders correctly', () => {
    expect(render(<Button slim theme={stubData.theme} />)).toMatchSnapshot();
  });
});
