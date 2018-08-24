import React from 'react';
import { render } from 'enzyme';
import Loading, { Mask } from '../Loading';

describe('Loading', () => {
  test('renders correctly when not loading', () => {
    expect(render(<Loading>foo</Loading>)).toMatchSnapshot();
  });

  test('renders correctly when no loading', () => {
    expect(render(<Loading loading>foo</Loading>)).toMatchSnapshot();
  });
});

describe('Mask', () => {
  test('renders correctly when not initiated', () => {
    expect(render(<Mask theme={stubData.theme} />)).toMatchSnapshot();
  });

  test('renders correctly when no initiated', () => {
    expect(render(<Mask initiated theme={stubData.theme} />)).toMatchSnapshot();
  });
});
