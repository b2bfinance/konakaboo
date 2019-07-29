import { SET_FILTER, RESET_FILTERS, RESET_GROUP_FILTERS } from "../constants";
import { getEmptyChosen } from "../utils/filter";
import { useReducer } from "react";

export const initialState = {
  chosen: [],
  available: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      state.chosen[action.group] = action.chosen;

      return {
        ...state,
        chosen: [...state.chosen]
      };
    case RESET_FILTERS:
      return {
        ...state,
        chosen: getEmptyChosen(state.available)
      };
    case RESET_GROUP_FILTERS:
      state.chosen[action.group] = state.available[action.group].multiChoice ? [] : "";

      return {
        ...state,
        chosen: [...state.chosen]
      };
    default:
      return state;
  }
};

export default filters => useReducer(filterReducer, { ...initialState, ...filters });
