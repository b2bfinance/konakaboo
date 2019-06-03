import React from 'react';
import Product from './Product';
import Error from './Error';
import Loading, { Mask } from './Loading';
import Empty from './Empty';

export default ({ error, hasFetched, isFetching, cta, products }) => {
  if (error) {
    return (
      <Error message="We had problems retrieving products for you, retry or come back later." />
    );
  }

  if (!hasFetched && !products) {
    return <Mask />;
  }

  if (products.length === 0) {
    return <Empty />;
  }

  return (
    <Loading loading={isFetching}>
      {products.map((product, i) => (
        <Product key={i} cta={cta} {...product} />
      ))}
    </Loading>
  );
};
