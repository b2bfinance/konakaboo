import React from 'react';
import { render } from 'enzyme';
import HeadingRow, { ProductHeading } from '../HeadingRow';

describe('HeadingRow', () => {
  test('renders correctly without highlight', () => {
    expect(
      render(<HeadingRow labels={['foo', 'bar']} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });

  test('renders correctly with highlight', () => {
    expect(
      render(
        <HeadingRow highlight labels={['foo', 'bar']} theme={stubData.theme} />
      )
    ).toMatchSnapshot();
  });
});

describe('ProductHeading', () => {
  test('renders correctly', () => {
    expect(render(<ProductHeading />)).toMatchSnapshot();
  });
});
