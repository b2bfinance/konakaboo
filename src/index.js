import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import createStore from './store';
import { ThemeProvider } from 'styled-components';

const store = createStore(window.B2B_EMBED_STATE || {});
const { theme } = store.getState();

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('b2bfinance-products')
);
