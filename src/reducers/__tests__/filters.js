import { SET_FILTER, RESET_FILTERS } from '../../constants';
import reducer from '../filters';

it('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    chosen: {},
    available: []
  });
});

it('Should handle SET_FILTER', () => {
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

it('Should handle RESET_FILTERS', () => {
  expect(
    reducer(stubData.filters.withSingleAndMultiChoiceChosen, {
      type: RESET_FILTERS,
      payload: {}
    })
  ).toEqual({
    chosen: {
      0: [],
      1: ''
    },
    available: stubData.filters.withSingleAndMultiChoiceChosen.available
  });
});
