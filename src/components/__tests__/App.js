import React from 'react';
import { render, shallow } from 'enzyme';
import App, { Wrapper } from '../App';

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(render(<Wrapper theme={stubData.theme} />)).toMatchSnapshot();
  });
});

describe('App', () => {
  test('renders correctly with filters', () => {
    expect(
      shallow(
        <App
          filters={stubData.filters.withSingleAndMultiChoiceChosen}
          config={{ provider: '' }}
        />
      )
    ).toMatchSnapshot();
  });

  test('renders correctly without filters', () => {
    expect(
      shallow(
        <App
          filters={{ available: [], chosen: {} }}
          config={{ provider: '' }}
        />
      )
    ).toMatchSnapshot();
  });
});
