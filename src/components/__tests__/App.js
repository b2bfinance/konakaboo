import React from 'react';
import renderer from 'react-test-renderer';
import { render, shallow } from 'enzyme';
import { StyledAppContainer, AppContainer, mapStateToProps } from '../App';

test('<StyledAppContainer /> renders correctly', () => {
  expect(
    render(<StyledAppContainer theme={stubData.theme} />)
  ).toMatchSnapshot();
});

describe('<AppContainer />', () => {
  test('with filters renders correctly', () => {
    expect(
      shallow(<AppContainer dispatch={jest.fn()} filterCount={1} />)
    ).toMatchSnapshot();
  });

  test('without filters renders correctly', () => {
    expect(
      shallow(<AppContainer dispatch={jest.fn()} filterCount={0} />)
    ).toMatchSnapshot();
  });
});

test('should dispatch loadProducts', () => {
  const mockDispatch = jest.fn();
  shallow(<AppContainer dispatch={mockDispatch} />);
  expect(mockDispatch.mock.calls.length).toBe(1);
});

test('mapStateToProps maps the state correctly', () => {
  const stubState = {
    filters: stubData.filters.withSingleAndMultiChoiceChosen,
    products: {
      error: false,
      isFetching: false,
      items: stubData.products.response.data
    }
  };

  expect(mapStateToProps(stubState)).toEqual({
    filterCount: stubState.filters.available.length,
    isFetching: false,
    hasFetched: true,
    products: stubState.products.items,
    error: false
  });
});
