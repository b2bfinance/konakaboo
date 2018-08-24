import React from 'react';
import { shallow, render } from 'enzyme';
import List from '../List';

describe('List', () => {
  test('renders correctly when fetching has not started', () => {
    expect(render(<List hasFetched={false} />)).toMatchSnapshot();
  });

  test('renders correctly with an error', () => {
    expect(render(<List hasFetched={true} error={true} />)).toMatchSnapshot();
  });

  test('renders correctly with no products', () => {
    expect(render(<List hasFetched={true} products={[]} />)).toMatchSnapshot();
  });

  test('renders correctly with products', () => {
    expect(
      shallow(
        <List hasFetched={true} products={stubData.products.response.data} />
      )
    ).toMatchSnapshot();
  });
});
