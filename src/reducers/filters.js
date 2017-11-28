import { SET_FILTER } from '../constants';

export default (
  state = {
    chosen: [],
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
    default:
      return state;
  }
};
