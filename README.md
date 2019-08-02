# Products Embed

[![Storybook][storybook-badge]][storybook]
[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Display a list of products.

## Installation

```sh
// with npm
npm install @b2bfinance/products-embed

// with yarn
yarn add @b2bfinance/products-embed
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { EmbedWrapper } from "@b2bfinance/products-embed";

// Defaults
const options = {
  products = [],
  productsLimit = 10,
  chosenFilters = [],
  availableFilters = [],
  cta = "Get Deal",
  provider = null,
  onMoreDetails = null,
  onApply = null,
};

function App() {
  return <EmbedWrapper {...options} />;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

**Please note** if you choose not to supply products then you must supply a provider, and vice versa.

[storybook-badge]: https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg
[storybook]: https://storybook.js.org/
[build-badge]: https://img.shields.io/travis/legalweb/products-embed/master.png?style=flat-square
[build]: https://travis-ci.org/legalweb/products-embed
[npm-badge]: https://img.shields.io/npm/v/@b2bfinance/products-embed.png?style=flat-square
[npm]: https://www.npmjs.org/package/@b2bfinance/products-embed
[coveralls-badge]: https://img.shields.io/coveralls/legalweb/products-embed/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/legalweb/products-embed
