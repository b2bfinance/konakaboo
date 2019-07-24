import { SET_PRODUCTS } from "../constants";
import { useReducer } from "react";

export const initialState = {
  data: [],
  skip: 0,
  perPage: 20
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case NEXT_PAGE:
      return {
        ...state,
        skip: products.length
      };
    default:
      return state;
  }
};

export default products =>
  useReducer(productReducer, { ...initialState, ...products });
