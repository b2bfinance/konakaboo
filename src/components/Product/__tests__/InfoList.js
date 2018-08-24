import React from 'react';
import { render } from 'enzyme';
import InfoList from '../InfoList';

describe('InfoList', () => {
  test('renders correctly', () => {
    expect(render(<InfoList />)).toMatchSnapshot();
  });
});
