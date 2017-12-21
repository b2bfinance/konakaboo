import { SET_FILTER, RESET_FILTERS, RESET_GROUP_FILTERS } from '../constants';
import { loadProducts } from './products';

function setFilters(group, choices) {
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

function resetGroupFilters(group) {
  return {
    type: RESET_GROUP_FILTERS,
    group,
    payload: {}
  };
}

export function resetFiltersForGroup(group) {
  return (dispatch, getState) => {
    dispatch(resetGroupFilters(group));
    dispatch(loadProducts());
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
