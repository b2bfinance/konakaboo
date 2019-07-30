import { useReducer } from "react";

export const initialState = {
  cta: "Get Deal",
  loadingErrorMessage: "There were errors getting the products for you. Please retry or come back later",
  provider: null,
  onMoreDetails: (product, closeDetails) => {},
  onApply: product => {}
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default configState => useReducer(configReducer, { ...initialState, ...configState });
