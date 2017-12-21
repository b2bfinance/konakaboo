import React from 'react';
import { shallow, render } from 'enzyme';
import ProductList, {
  StyledProductError,
  ProductMask,
  ProductEmptyContainer,
  ProductsLoadingContainer,
  ProductError,
  ProductLoadingMask,
  EmptyProducts
} from '../ProductList';

test('<StyledProductError /> renders correctly', () => {
  expect(render(<StyledProductError />)).toMatchSnapshot();
});

test('<ProductMask /> renders correctly', () => {
  expect(render(<ProductMask theme={stubData.theme} />)).toMatchSnapshot();
});

test('<ProductEmptyContainer /> renders correctly', () => {
  expect(
    render(<ProductEmptyContainer theme={stubData.theme} />)
  ).toMatchSnapshot();
});

test('<ProductsLoadingContainer /> renders correctly', () => {
  expect(render(<ProductsLoadingContainer />)).toMatchSnapshot();
});

test('<ProductsLoadingContainer /> while loading renders correctly', () => {
  expect(render(<ProductsLoadingContainer loading />)).toMatchSnapshot();
});

test('<ProductError /> renders correctly', () => {
  expect(render(<ProductError />)).toMatchSnapshot();
});

test('<ProductLoadingMask /> renders correctly', () => {
  expect(render(<ProductLoadingMask />)).toMatchSnapshot();
});

test('<EmptyProducts /> renders correctly', () => {
  expect(render(<EmptyProducts />)).toMatchSnapshot();
});

describe('<ProductList />', () => {
  test('when not fetched renders correctly', () => {
    expect(render(<ProductList hasFetched={false} />)).toMatchSnapshot();
  });

  test('with an error renders correctly', () => {
    expect(
      render(<ProductList hasFetched={true} error={true} />)
    ).toMatchSnapshot();
  });

  test('with no products renders correctly', () => {
    expect(
      render(<ProductList hasFetched={true} products={[]} />)
    ).toMatchSnapshot();
  });

  test('with products renders correctly', () => {
    expect(
      shallow(
        <ProductList
          hasFetched={true}
          products={stubData.products.response.data}
        />
      )
    ).toMatchSnapshot();
  });
});
