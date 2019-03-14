import 'core-js/modules/es6.array.find';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import createStore from './store';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './utils/theme';

const store = createStore(window.PRODUCTS_EMBED_STATE || {});
const theme = { ...defaultTheme, ...store.getState().theme };

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('products-embed-container')
);
