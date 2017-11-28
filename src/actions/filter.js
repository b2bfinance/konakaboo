import { SET_FILTER } from '../constants';
import { loadProducts } from './products';

export function setFilters(group, choices) {
  return {
    type: SET_FILTER,
    group,
    payload: choices
  };
}

export function setChosenFiltersForGroup(group, choices) {
  return (dispatch, getState) => {
    dispatch(setFilters(group, choices));
    dispatch(loadProducts());
  };
}
