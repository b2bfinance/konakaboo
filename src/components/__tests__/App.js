import React from 'react';
import { render, shallow } from 'enzyme';
import { Wrapper, AppContainer, mapStateToProps } from '../App';

describe('Wrapper', () => {
  test('renders correctly', () => {
    expect(render(<Wrapper theme={stubData.theme} />)).toMatchSnapshot();
  });
});

describe('AppContainer', () => {
  test('renders correctly with filters', () => {
    expect(
      shallow(<AppContainer loadProducts={jest.fn()} filterCount={1} />)
    ).toMatchSnapshot();
  });

  test('renders correctly without filters', () => {
    expect(
      shallow(<AppContainer loadProducts={jest.fn()} filterCount={0} />)
    ).toMatchSnapshot();
  });

  test('should dispatch loadProducts', () => {
    const loadProducts = jest.fn();
    shallow(<AppContainer loadProducts={loadProducts} />);
    expect(loadProducts.mock.calls.length).toBe(1);
  });

  test('mapStateToProps maps the state correctly', () => {
    const mappedState = mapStateToProps({
      filters: { available: [] },
      products: {}
    });

    expect(mappedState).toHaveProperty('filtersChosen');
    expect(mappedState).toHaveProperty('filtersAvailable');
    expect(mappedState).toHaveProperty('filterCount');
    expect(mappedState).toHaveProperty('isFetching');
    expect(mappedState).toHaveProperty('hasFetched');
    expect(mappedState).toHaveProperty('products');
    expect(mappedState).toHaveProperty('error');
  });
});
