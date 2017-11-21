import {
  TOGGLE_FILTER,
  REMOVE_GROUP_FILTERS,
} from '../constants';

export default (state = {
  chosen: [],
  available: [],
}, action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      if (state.chosen.indexOf(action.payload) === -1) {
        return {
          ...state,
          chosen: [
            ...state.chosen,
            action.payload,
          ],
        };
      }

      return {
        ...state,
        chosen: state.chosen.filter((f) => f !== action.payload),
      };
    case REMOVE_GROUP_FILTERS:
      return {
        ...state,
        chosen: state.chosen.filter((f) => f.split('.')[0] !== action.payload),
      };
    default:
      return state;
  }
}
