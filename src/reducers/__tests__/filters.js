import {
  SET_FILTER,
  RESET_FILTERS,
  RESET_GROUP_FILTERS
} from '../../constants';
import reducer from '../filters';

it('will return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    chosen: {},
    available: []
  });
});

it('will handle SET_FILTER', () => {
  expect(
    reducer(undefined, {
      type: SET_FILTER,
      group: 0,
      payload: ['TEST']
    })
  ).toEqual({
    chosen: {
      0: ['TEST']
    },
    available: []
  });
});

it('will handle RESET_FILTERS', () => {
  const filterState = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(
    reducer(filterState, {
      type: RESET_FILTERS,
      payload: {}
    })
  ).toEqual({
    chosen: {
      0: [],
      1: ''
    },
    available: filterState.available
  });
});

it('will handle multi chosen RESET_GROUP_FILTERS', () => {
  const filterState = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(
    reducer(filterState, {
      type: RESET_GROUP_FILTERS,
      group: 0,
      payload: {}
    })
  ).toEqual({
    chosen: {
      0: [],
      1: filterState.chosen[1]
    },
    available: filterState.available
  });
});

it('will handle single chosen RESET_GROUP_FILTERS', () => {
  const filterState = stubData.filters.withSingleAndMultiChoiceChosen;

  expect(
    reducer(filterState, {
      type: RESET_GROUP_FILTERS,
      group: 1,
      payload: {}
    })
  ).toEqual({
    chosen: {
      0: filterState.chosen[0],
      1: ''
    },
    available: filterState.available
  });
});
