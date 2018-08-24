import React from 'react';
import { render } from 'enzyme';
import HeadingRow from '../HeadingRow';

describe('HeadingRow', () => {
  test('renders correctly without highlight', () => {
    expect(render(<HeadingRow theme={stubData.theme} />)).toMatchSnapshot();
  });

  test('renders correctly with highlight', () => {
    expect(
      render(<HeadingRow highlight theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});
