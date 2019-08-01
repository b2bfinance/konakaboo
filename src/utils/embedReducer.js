import {
  FILTERS_GROUP_RESET,
  FILTERS_RESET,
  FILTERS_SET,
  PRODUCTS_ERROR,
  PRODUCTS_INCREASE_LIMIT,
  PRODUCTS_LOADING,
  PRODUCTS_SET,
} from "./actions";
import { getEmptyChosen, makeFilterQueryString } from "./filter";

const embedReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_SET:
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
      };
    case PRODUCTS_LOADING:
      return {
        ...state,
        productsLoading: true,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        productsError: true,
      };
    case PRODUCTS_INCREASE_LIMIT:
      const increasedLimit = state.productsLimit + 10;
      const productsLength = state.products.length;

      return {
        ...state,
        // If the increased limit is greater than our products length then
        // we'll set the products length as the limit instead
        productsLimit:
          productsLength < increasedLimit ? productsLength : increasedLimit,
      };
    case FILTERS_SET:
      state.chosenFilters[action.group] = action.chosen;

      return {
        ...state,
        filterQuery: makeFilterQueryString(state),
        chosenFilters: [...state.chosenFilters],
      };
    case FILTERS_RESET:
      const emptyChosenFilters = getEmptyChosen(state.availableFilters);

      return {
        ...state,
        filterQuery: makeFilterQueryString(state),
        chosenFilters: emptyChosenFilters,
      };
    case FILTERS_GROUP_RESET:
      const isMultiChoice = state.availableFilters[action.group].multiChoice;
      state.chosenFilters[action.group] = isMultiChoice ? [] : "";

      return {
        ...state,
        filterQuery: "",
        chosenFilters: [...state.chosenFilters],
      };
    default:
      return state;
  }
};

export default embedReducer;
