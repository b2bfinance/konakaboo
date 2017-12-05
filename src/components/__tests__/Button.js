import React from 'react';
import { render } from 'enzyme';
import Button from '../Button';

test('Primary button renders correctly', () => {
  expect(render(<Button primary theme={stubData.theme} />)).toMatchSnapshot();
});

test('Secondary button renders correctly', () => {
  expect(render(<Button secondary theme={stubData.theme} />)).toMatchSnapshot();
});

test('Slim button renders correctly', () => {
  expect(render(<Button slim theme={stubData.theme} />)).toMatchSnapshot();
});
