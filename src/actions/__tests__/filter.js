import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  PRODUCTS_REQUEST,
  RESET_GROUP_FILTERS,
  RESET_FILTERS,
  SET_FILTER
} from '../../constants';
import {
  resetFiltersForGroup,
  resetAllChosenFilters,
  setChosenFiltersForGroup
} from '../filter';

const mockStore = configureMockStore([thunk]);
const mockState = {
  config: {
    provider: 'http://localhost:8000'
  },
  filters: stubData.filters.withNoChosen
};

it('resets all chosen filters for a group', () => {
  const expectedActions = [
    { type: RESET_GROUP_FILTERS, group: 1, payload: {} },
    { type: PRODUCTS_REQUEST }
  ];

  const store = mockStore(mockState);

  store.dispatch(resetFiltersForGroup(1));
  expect(store.getActions()).toEqual(expectedActions);
});

it('resets all chosen filters', () => {
  const expectedActions = [
    { type: RESET_FILTERS, payload: {} },
    { type: PRODUCTS_REQUEST }
  ];

  const store = mockStore(mockState);

  store.dispatch(resetAllChosenFilters());
  expect(store.getActions()).toEqual(expectedActions);
});

it('sets chosen filters for group', () => {
  const expectedActions = [
    { type: SET_FILTER, group: 1, payload: ['TEST'] },
    { type: PRODUCTS_REQUEST }
  ];

  const store = mockStore(mockState);

  store.dispatch(setChosenFiltersForGroup(1, ['TEST']));
  expect(store.getActions()).toEqual(expectedActions);
});
