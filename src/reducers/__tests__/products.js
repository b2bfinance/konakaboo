import reducer from '../products';
import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from '../../constants';

it('Should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    isFetching: false,
    error: false
  });
});

it('Should handle PRODUCTS_REQUEST', () => {
  expect(
    reducer(undefined, {
      type: PRODUCTS_REQUEST
    })
  ).toEqual({
    isFetching: true,
    error: false
  });
});

it('Should handle PRODUCTS_SUCCESS', () => {
  expect(
    reducer(undefined, {
      type: PRODUCTS_SUCCESS,
      payload: stubData.products.response
    })
  ).toEqual({
    items: stubData.products.response.data,
    isFetching: false,
    error: false
  });
});

it('Should handle PRODUCTS_FAILURE', () => {
  expect(
    reducer(undefined, {
      type: PRODUCTS_FAILURE,
      payload: {}
    })
  ).toEqual({
    isFetching: false,
    error: {}
  });
});
