import { SET_FILTER, RESET_FILTERS } from '../constants';
import { loadProducts } from './products';

export function setFilters(group, choices) {
  return {
    type: SET_FILTER,
    group,
    payload: choices
  };
}

function resetFilters() {
  return {
    type: RESET_FILTERS,
    payload: {}
  };
}

export function resetAllChosenFilters() {
  return (dispatch, getState) => {
    dispatch(resetFilters());
    dispatch(loadProducts());
  };
}

export function setChosenFiltersForGroup(group, choices) {
  return (dispatch, getState) => {
    dispatch(setFilters(group, choices));
    dispatch(loadProducts());
  };
}
