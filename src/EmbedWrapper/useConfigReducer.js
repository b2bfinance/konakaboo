import { useReducer } from "react";

export const initialState = {
  cta: "Get Deal",
  loadingErrorMessage:
    "We had problems retrieving products for you, retry or come back later.",
  provider: null,
  onMoreDetails: () => {},
  onApply: () => {}
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default config =>
  useReducer(configReducer, { ...initialState, ...config });
