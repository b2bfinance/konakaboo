import React from 'react';
import { render } from 'enzyme';
import MoreInfoButton from '../MoreInfoButton';

describe('MoreInfoButton', () => {
  test('renders correctly', () => {
    expect(
      render(<MoreInfoButton>more info button</MoreInfoButton>)
    ).toMatchSnapshot();
  });
});
