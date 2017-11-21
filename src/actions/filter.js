import {
  TOGGLE_FILTER,
  REMOVE_GROUP_FILTERS,
} from '../constants';

export function toggleFilter(group, filter) {
  return {
    type: TOGGLE_FILTER,
    payload: `${group}.${filter}`,
  };
}

export function removeGroupFilters(group) {
  return {
    type: REMOVE_GROUP_FILTERS,
    payload: `${group}`,
  };
}

export function toggleFilters(group, filter) {
  return (dispatch, getState) => {
    const { filters } = getState();

    if (!filters.available[group].multiChoice) {
      dispatch(removeGroupFilters(group));
    }

    dispatch(toggleFilter(group, filter));
  }
}
