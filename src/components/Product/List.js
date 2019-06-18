import React, { useState, useEffect } from 'react';
import Product from './Product';
import Error from './Error';
import Loading, { Mask } from './Loading';
import Empty from './Empty';
import { fetchProducts } from '../../utils/api';

const useProductFetcher = provider => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const productsResponse = await fetchProducts(provider);
        setProducts(productsResponse.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [provider]);

  return [loading, error, products];
};

export default ({ provider, cta }) => {
  const [loading, error, products] = useProductFetcher(provider);

  if (error) {
    return (
      <Error message="We had problems retrieving products for you, retry or come back later." />
    );
  }

  if (products.length === 0 && loading) {
    return <Mask />;
  }

  if (products.length === 0) {
    return <Empty />;
  }

  return (
    <Loading loading={loading}>
      {products.map((product, i) => (
        <Product key={i} cta={cta} {...product} />
      ))}
    </Loading>
  );
};
