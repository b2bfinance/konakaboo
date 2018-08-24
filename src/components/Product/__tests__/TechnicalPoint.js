import React from 'react';
import { render } from 'enzyme';
import TechnicalPoint from '../TechnicalPoint';

describe('TechnicalPoint', () => {
  test('renders correctly', () => {
    expect(
      render(<TechnicalPoint points={['foo', 'bar']} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });
});
