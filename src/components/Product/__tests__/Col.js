import React from 'react';
import { render } from 'enzyme';
import Col, { MultiCol } from '../Col';

describe('Col', () => {
  test('renders correctly', () => {
    expect(render(<Col theme={stubData.theme} />)).toMatchSnapshot();
  });
});

describe('MultiCol', () => {
  test('renders correctly', () => {
    const columns = [
      { label: 'foo', value: 'bar' },
      { label: 'bar', value: 'foo' }
    ];

    expect(
      render(<MultiCol columns={columns} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});
