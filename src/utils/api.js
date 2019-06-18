import fetch from 'isomorphic-fetch';
import { getQueryStringFromState } from './filter';

export function makeProviderURI(provider, filterState) {
  const filterQuery = getQueryStringFromState(filterState);

  if (!filterQuery) {
    return provider;
  }

  if (provider.indexOf('?') !== -1) {
    return `${provider}&${filterQuery}`;
  }

  return `${provider}?${filterQuery}`;
}

export const fetchProducts = async provider => {
  const products = await fetch(provider);
  return products.json();
};
