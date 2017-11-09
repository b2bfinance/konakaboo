import { combineReducers } from 'redux';
import config from './config';
import theme from './theme';
import filters from './filters';
import products from './products';

export default combineReducers({
  config,
  theme,
  filters,
  products,
});
