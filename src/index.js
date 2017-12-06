import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';
import { ThemeProvider } from 'styled-components';

const store = createStore(window.PRODUCTS_EMBED_STATE || {});
const { theme } = store.getState();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('products-embed-container')
);
