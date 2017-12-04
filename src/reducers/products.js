import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE
} from '../constants';

export default (
  state = {
    isFetching: false,
    error: false
  },
  action
) => {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case PRODUCTS_SUCCESS:
      return {
        items: action.payload.data,
        isFetching: false,
        error: false
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
