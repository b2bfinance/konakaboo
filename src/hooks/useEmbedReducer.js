import { useReducer } from "react";
import { embedReducer } from "../utils";
import defaults from "lodash.defaults";

const defaultState = {
  products: [],
  productsLimit: 10,
  filters: [],
  cta: "Get Deal",
  provider: null,
  onMoreDetails: null,
  onApply: null,
};

const useEmbedReducer = state => {
  const initialState = defaults(state, defaultState);
  const willLoad = initialState.provider && initialState.products.length === 0;

  return useReducer(embedReducer, {
    ...initialState,
    productsError: false,
    productsLoading: willLoad,
  });
};

export default useEmbedReducer;
