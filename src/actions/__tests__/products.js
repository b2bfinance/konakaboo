import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from '../../constants';
import { loadProducts } from '../products';

const mockStore = configureMockStore([thunk]);

it('fetches products successfully', async () => {
  const expectedActions = [
    { type: PRODUCTS_REQUEST },
    { type: PRODUCTS_SUCCESS, payload: stubData.products.response }
  ];

  const store = mockStore({
    config: {
      provider: 'http://localhost:8000'
    },
    filters: stubData.filters.withNoChosen
  });

  await store.dispatch(loadProducts());
  expect(store.getActions()).toEqual(expectedActions);
});

it('creates PRODUCTS_FAILURE when fetching products fails', async () => {
  const expectedActions = [
    { type: PRODUCTS_REQUEST },
    { type: PRODUCTS_FAILURE, payload: { error: true } }
  ];

  const store = mockStore({
    config: {
      provider: 'http://localhost:8000/error'
    },
    filters: stubData.filters.withNoChosen
  });

  await store.dispatch(loadProducts());
  expect(store.getActions()).toEqual(expectedActions);
});
