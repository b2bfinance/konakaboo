import { SET_FILTER, RESET_FILTERS, RESET_GROUP_FILTERS } from '../constants';

export const setFilters = (group, choices) => {
  return {
    type: SET_FILTER,
    group,
    payload: choices
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
    payload: {}
  };
};

export const resetGroupFilters = group => {
  return {
    type: RESET_GROUP_FILTERS,
    group,
    payload: {}
  };
};
