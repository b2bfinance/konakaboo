import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import createStore from './store';
import { ThemeProvider } from 'styled-components';
import { setStore } from './api';

const globalState = window.PRODUCTS_INITIAL_STATE || {};

const store = createStore({
  config: globalState.config,
  theme: globalState.theme,
});

const { theme } = store.getState();

setStore(store);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('b2bfinance-products')
);
