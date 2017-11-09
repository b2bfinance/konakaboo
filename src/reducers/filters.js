import filters from '../config/filters';
import {
  buyToLetInitialState
} from '../config/filters';

function loadInitialState() {
  switch (process.env.REACT_APP_PRODUCT_TYPE) {
    case 'buy_to_lets':
      return buyToLetInitialState();
    default:
      return {};
  }
}

export default (state = loadInitialState(), action) => {
  return state;
}
