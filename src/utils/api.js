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

export default async (provider, filterState) => {
  const products = await fetch(makeProviderURI(provider, filterState));
  return products.json();
};
