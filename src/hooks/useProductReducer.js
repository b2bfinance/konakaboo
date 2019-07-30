import { useReducer } from "react";
import { PRODUCTS_ERROR, PRODUCTS_LOAD_START, SET_PRODUCTS } from "../constants";

export const initialState = {
  loading: false,
  error: false,
  data: []
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case PRODUCTS_LOAD_START:
      return {
        ...state,
        loading: true
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default productState => useReducer(productReducer, { ...initialState, ...productState });
