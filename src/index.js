import 'core-js/modules/es6.array.find';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './utils/theme';

let products = window.PRODUCTS_EMBED_STATE || [];

if (!products.length) {
  products = [products];
}

products.forEach((product, i) => {
  try {
    const store = createStore(product);
    const theme = { ...defaultTheme, ...store.getState().theme };

    ReactDOM.render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>,
      document.querySelector(
        product.config.selector || '#products-embed-container'
      )
    );
  } catch (e) {
    throw new Error(
      `Invalid product configuration in window.PRODUCTS_EMBED_STATE[${i}]`
    );
  }
});
