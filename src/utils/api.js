import axios from "axios";

export const makeProviderURI = (provider, filterQueryString) => {
  if (!provider) {
    return null;
  }

  if (!filterQueryString) {
    return provider;
  }

  if (provider.indexOf("?") !== -1) {
    return `${provider}&${filterQueryString}`;
  }

  return `${provider}?${filterQueryString}`;
};

export const fetchProducts = async (provider, filterQuery) =>
  await axios.get(makeProviderURI(provider, filterQuery));
