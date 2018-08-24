import React from 'react';
import { render } from 'enzyme';
import Empty from '../Empty';

describe('Empty', () => {
  test('renders correctly', () => {
    expect(render(<Empty theme={stubData.theme} />)).toMatchSnapshot();
  });
});
