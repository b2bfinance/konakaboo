import axios from "axios";
import { getQueryStringFromState } from "./filter";

export function makeProviderURI(provider, filters) {
  const filterQuery = getQueryStringFromState(filters);

  if (!filterQuery) {
    return provider;
  }

  if (provider.indexOf("?") !== -1) {
    return `${provider}&${filterQuery}`;
  }

  return `${provider}?${filterQuery}`;
}

export const fetchProducts = async provider => await axios.get(provider);
