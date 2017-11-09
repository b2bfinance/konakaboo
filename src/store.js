import reducer from './reducers/combinedReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import api from './api';

export default (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunk.withExtraArgument(api)));
}
