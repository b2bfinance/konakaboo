import React from 'react';
import { connect } from 'react-redux';
import Product from './Product';
import styled from 'styled-components';

const StyledProductError = styled.div`
  background-color: #ff9800;
  color: #fff;
  padding: 1rem;
`

const ProductError = () => (
  <StyledProductError>
    We had problems retrieving products for you, retry or come back later.
  </StyledProductError>
);

const ProductList = ({
  error,
  isFetching,
  hasItems,
  items,
}) => {
  if (isFetching) {
    return (
      <div>Loading...</div>
    );
  }

  if (error) {
    return (<ProductError />);
  }

  if (!hasItems) {
    return (
      <div>No products </div>
    );
  }

  return (
    items.map(product => (
      <Product key={product.id} product={product}></Product>
    ))
  );
};

const mapStateToProps = ({products}) => ({
  error: products.error,
  items: products.items,
  isFetching: products.isFetching,
  hasItems: products.items.length > 0,
});

export default connect(mapStateToProps)(ProductList);
