import React from 'react';
import { render } from 'enzyme';
import FeaturedHighlightPointRow from '../FeaturedHighlightPointRow';

describe('FeaturedHighlightPointRow', () => {
  test('renders correctly', () => {
    expect(render(<FeaturedHighlightPointRow />)).toMatchSnapshot();
  });
});
