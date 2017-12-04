import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { PRODUCTS_REQUEST, SET_FILTER, RESET_FILTERS } from '../../constants';
import { resetAllChosenFilters, setChosenFiltersForGroup } from '../filter';

const mockStore = configureMockStore([thunk]);
const mockState = {
  config: {
    provider: 'http://localhost:8000'
  },
  filters: stubData.filters.withNoChosen
};

it('Resets all chosen filters', () => {
  const expectedActions = [
    { type: RESET_FILTERS, payload: {} },
    { type: PRODUCTS_REQUEST }
  ];

  const store = mockStore(mockState);

  store.dispatch(resetAllChosenFilters());
  expect(store.getActions()).toEqual(expectedActions);
});

it('Sets chosen filters for group', () => {
  const expectedActions = [
    { type: SET_FILTER, group: 1, payload: ['TEST'] },
    { type: PRODUCTS_REQUEST }
  ];

  const store = mockStore(mockState);

  store.dispatch(setChosenFiltersForGroup(1, ['TEST']));
  expect(store.getActions()).toEqual(expectedActions);
});
