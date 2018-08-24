import React from 'react';
import { render } from 'enzyme';
import Chip, { ChipHolder } from '../Chip';

describe('ChipHolder', () => {
  test('renders correctly', () => {
    expect(render(<ChipHolder />)).toMatchSnapshot();
  });
});

describe('Chip', () => {
  test('renders correctly with no selection', () => {
    expect(render(<Chip selection={[]} />)).toMatchSnapshot();
  });

  test('renders correctly with selection', () => {
    expect(render(<Chip selection={[0, 1]} />)).toMatchSnapshot();
  });
});
