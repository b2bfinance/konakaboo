# Tablo

[![npm package][npm-badge]][npm]

Display a list of products.

## Installation

```sh
// with npm
npm install @b2bfinance/tablo

// with yarn
yarn add @b2bfinance/tablo
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { EmbedWrapper } from "@b2bfinance/tablo";

function App() {
  const noOp = () => {};

  return (
    <EmbedWrapper
      products={[]}
      productsLimit={10}
      filters={[]}
      cta={"Get Deal"}
      ribbonText={"Hot"}
      onMoreDetails={noOp}
      onApply={noOp}
      onFilter={noOp}
    />
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#element-to-render-products-into")
);
```

### Theme Options

You can use [style overrides](https://mui.com/material-ui/customization/theme-components/#theme-style-overrides) from mui. Tablo named components are as follows:

```
TabloProductHeadingRow
TabloProductWrapper
TabloProductList
TabloProductListEmpty
TabloProductColumns
TabloProductFeaturePoint
TabloProductMoreInfoHeader
TabloProductMoreInfoBody
TabloProductMoreInfoFooter
```

[npm-badge]: https://img.shields.io/npm/v/@b2bfinance/tablo.png?style=flat-square
[npm]: https://www.npmjs.org/package/@b2bfinance/tablo
