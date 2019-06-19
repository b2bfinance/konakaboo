import React from 'react';
import { createRender } from '@material-ui/core/test-utils';
import HeadingRow, { Heading, ProductHeading } from '../HeadingRow';

describe('Heading', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<Heading theme={stubData.theme} />)).toMatchSnapshot();
  });
});

describe('HeadingRow', () => {
  let render;

  beforeEach(() => {
    render = createRender();
  });

  test('renders correctly without highlight', () => {
    expect(
      render(<HeadingRow labels={['foo', 'bar']} theme={stubData.theme} />)
    ).toMatchSnapshot();
  });

  test('renders correctly with highlight', () => {
    expect(
      render(
        <HeadingRow
          highlighted
          labels={['foo', 'bar']}
          theme={stubData.theme}
        />
      )
    ).toMatchSnapshot();
  });
});

describe('ProductHeading', () => {
  test('renders correctly', () => {
    const render = createRender();
    expect(render(<ProductHeading />)).toMatchSnapshot();
  });
});
