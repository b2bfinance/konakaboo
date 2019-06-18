import 'core-js/modules/es6.array.find';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './utils/theme';

let productsConfiguration = window.PRODUCTS_EMBED_STATE || [];

if (!productsConfiguration.length) {
  productsConfiguration = [productsConfiguration];
}

productsConfiguration.forEach((configuration, i) => {
  const theme = { ...defaultTheme, ...configuration.theme };
  const selector = configuration.config.selector || '#products-embed-container';

  try {
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <App config={configuration.config} filters={configuration.filters} />
      </ThemeProvider>,
      document.querySelector(selector)
    );
  } catch (e) {
    throw new Error(
      `Invalid product configuration in window.PRODUCTS_EMBED_STATE[${i}]`
    );
  }
});
