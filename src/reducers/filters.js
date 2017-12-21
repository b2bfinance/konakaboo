import { SET_FILTER, RESET_FILTERS, RESET_GROUP_FILTERS } from '../constants';
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
    case RESET_GROUP_FILTERS:
      return {
        ...state,
        chosen: {
          ...state.chosen,
          [action.group]: state.available[action.group].multiChoice ? [] : ''
        }
      };
    default:
      return state;
  }
};
