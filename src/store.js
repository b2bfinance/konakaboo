import { combineReducers } from 'redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default initialState => {
  return createStore(
    combineReducers(reducers),
    initialState,
    applyMiddleware(thunk)
  );
};
