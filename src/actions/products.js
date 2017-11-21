import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from '../constants';

function productsLoading() {
  return {
    type: PRODUCTS_REQUEST
  };
}

function productsSuccess(products) {
  return {
    type: PRODUCTS_SUCCESS,
    payload: {
      products,
    },
  };
}

function productsFailure(error) {
  return {
    type: PRODUCTS_FAILURE,
    error: 'Failed',
    payload: error,
  };
}

export function loadProducts() {
  return async (dispatch, getState, api) => {
    const { isFetching } = getState().products;

    if (isFetching) {
      return;
    }

    dispatch(productsLoading());

    try {
      const products = await api.getProducts();
      dispatch(productsSuccess(products))
    } catch (e) {
      dispatch(productsFailure(e));
    }
  }
}
