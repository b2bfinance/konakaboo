import React from 'react';
import { render } from 'enzyme';
import HighlightPoint from '../HighlightPoint';

describe('HighlightPoint', () => {
  test('renders correctly', () => {
    expect(
      render(<HighlightPoint points={['foo', 'bar']} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});
