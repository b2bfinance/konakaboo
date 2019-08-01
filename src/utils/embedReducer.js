import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  RESET_FILTERS,
  RESET_GROUP_FILTERS,
  SET_FILTER,
  SET_PRODUCTS,
} from "../constants";
import { getEmptyChosen, makeFilterQueryString } from "./filter";

const embedReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
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
    case SET_FILTER:
      state.chosenFilters[action.group] = action.chosen;
      return {
        ...state,
        filterQuery: makeFilterQueryString(state),
        chosenFilters: [...state.chosenFilters],
      };
    case RESET_FILTERS:
      const emptyChosenFilters = getEmptyChosen(state.availableFilters);
      return {
        ...state,
        filterQuery: makeFilterQueryString(state),
        chosenFilters: emptyChosenFilters,
      };
    case RESET_GROUP_FILTERS:
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
