import React from 'react';
import Product from './Product';
import Row from '../Row';
import Col from '../Col';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';

export const StyledProductError = styled.div`
  background-color: #ff9800;
  color: #fff;
  padding: 1rem;
`;

export const ProductMask = styled.div`
  background-color: ${props => props.theme.productMaskBackground};
  height: 35rem;
  margin-bottom: 1.5rem;

  ${queries.desktop`
    height: 9rem;
  `};
`;

export const ProductEmptyContainer = styled(Col)`
  background-color: ${props => props.theme.productEmptyBackground};
  margin: 2rem auto;
  padding: 2rem;
`;

export const ProductsLoadingContainer = styled.div`
  ${props =>
    props.loading &&
    css`
      opacity: 0.75;
    `};
`;

export const ProductError = () => (
  <StyledProductError>
    We had problems retrieving products for you, retry or come back later.
  </StyledProductError>
);

export const ProductLoadingMask = () => (
  <div>
    <ProductMask />
    <ProductMask />
    <ProductMask />
  </div>
);

export const EmptyProducts = () => (
  <Row>
    <ProductEmptyContainer phone="100" desktop="35">
      <p>We don't have any products for you to compare.</p>
    </ProductEmptyContainer>
  </Row>
);

const ProductList = ({ error, hasFetched, isFetching, products, dispatch }) => {
  if (!hasFetched) {
    return <ProductLoadingMask />;
  }

  if (error) {
    return <ProductError />;
  }

  if (products.length === 0) {
    return <EmptyProducts />;
  }

  return (
    <ProductsLoadingContainer loading={isFetching}>
      {products.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </ProductsLoadingContainer>
  );
};

export default ProductList;
