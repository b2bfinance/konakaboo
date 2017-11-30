import { SET_FILTER, RESET_FILTERS } from '../constants';
import { getEmptyChosen } from '../utils/filter';

export default (
  state = {
    chosen: {},
    available: []
  },
  action
) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        chosen: {
          ...state.chosen,
          [action.group]: action.payload
        }
      };
    case RESET_FILTERS:
      return {
        ...state,
        chosen: getEmptyChosen(state.available)
      };
    default:
      return state;
  }
};
