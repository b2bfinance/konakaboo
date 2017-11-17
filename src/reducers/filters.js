import {
  buyToLetInitialState
} from '../config/filters';

import {
  ADD_FILTER,
  REMOVE_FITLER,
  REMOVE_GROUP_FILTERS,
} from '../constants';

function loadInitialState() {
  switch (process.env.REACT_APP_PRODUCT_TYPE) {
    case 'buy_to_lets':
      return buyToLetInitialState();
    default:
      return [];
  }
}

export default (state = {
  selectedCount: 0,
  groups: loadInitialState(),
}, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        groups: action.payload,
        selectedCount: state.selectedCount += 1,
      };
      break;
    default:

  }

  return state;
}
