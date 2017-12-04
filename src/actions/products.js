import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from '../constants';
import getProducts from '../utils/api';

function productsLoading() {
  return {
    type: PRODUCTS_REQUEST
  };
}

function productsSuccess(products) {
  return {
    type: PRODUCTS_SUCCESS,
    payload: products
  };
}

function productsFailure(error) {
  return {
    type: PRODUCTS_FAILURE,
    payload: error
  };
}

export const loadProducts = () => async (dispatch, getState) => {
  const { config, filters } = getState();

  dispatch(productsLoading());

  try {
    const products = await getProducts(config.provider, filters);
    dispatch(productsSuccess(products));
  } catch (e) {
    dispatch(productsFailure(e));
  }
};
