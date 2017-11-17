import {
  ADD_FILTER,
  REMOVE_FITLER,
  REMOVE_GROUP_FILTERS,
} from '../constants';

function addFilter(filters) {
  return {
    type: ADD_FILTER,
    payload: filters,
  };
}

function removeFitler(filters) {
  return {
    type: REMOVE_FITLER,
    payload: filters,
  };
}

export function toggleFilter(groupIndex, choiceIndex) {
  return (dispatch, getState) => {
    const { filters } = getState();
    const group = filters.groups[groupIndex];
    const choice = group.choices[choiceIndex]

    if (choice.chosen) {
      dispatch(removeFitler(choice));
    } else {
      dispatch(addFilter(choice));
    }
  }
}
