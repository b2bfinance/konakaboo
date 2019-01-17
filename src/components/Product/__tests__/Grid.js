import React from 'react';
import { render } from 'enzyme';
import Grid, { ProductMultiGrid } from '../Grid';

describe('Grid', () => {
  test('renders correctly', () => {
    expect(render(<Grid theme={stubData.theme} />)).toMatchSnapshot();
  });
});

describe('ProductMultiGrid', () => {
  test('renders correctly', () => {
    const columns = [
      { label: 'foo', value: 'bar' },
      { label: 'bar', value: 'foo' }
    ];

    expect(
      render(<ProductMultiGrid columns={columns} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});
