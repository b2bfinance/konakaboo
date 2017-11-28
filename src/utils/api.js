import fetch from 'isomorphic-fetch';
import { getQueryString } from './filter';

export function makeProvider(provider, filters) {
  const filterQuery = getQueryString(filters);

  if (!filterQuery) {
    return provider;
  }

  if (provider.indexOf('?') !== -1) {
    return `${provider}&${filterQuery}`;
  }

  return `${provider}?${filterQuery}`;
}

export default async (provider, filters) => {
  const products = await fetch(makeProvider(provider, filters));
  return products.json();
};
