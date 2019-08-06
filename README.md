# Konakaboo

[![Storybook][storybook-badge]][storybook]
[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Display a list of products.

## Installation

```sh
// with npm
npm install @b2bfinance/konakaboo

// with yarn
yarn add @b2bfinance/konakaboo
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { EmbedWrapper, theme } from "@b2bfinance/konakaboo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EmbedWrapper
        products={[]}
        productsLimit={10}
        filters={[]}
        cta={"Get Deal"}
        provider={null}
        onMoreDetails={null}
        onApply={null}
      />
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

### Products

Products must be an array of objects matching the `Product` type below.

```typescript
type Product = {
  id: String;
  type: String;
  issuer: String;
  title: String;
  brand: String;
  product: String;
  description: String;
  highlighted: Boolean;
  labels: String[];
  columns: {
    label: String;
    value: String;
  }[];
  detailed: {
    title: String;
    rows: {
      label: String;
      value: String;
    }[];
  }[];
  feature_point: String;
  links: {
    apply: String;
    logo: String;
  };
  meta: {
    faded: Boolean;
    confirm: {
      description: String;
      heading: String;
    };
  };
};
```

### Filters

Filters must be an array of objects matching the `Filter` type below.

```typescript
type Filter = {
  title: String;
  key: String;
  multiChoice: Boolean;
  selected: String[];
  choices: {
    label: String;
    value: String;
  }[];
};
```

[storybook-badge]: https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg
[storybook]: https://storybook.js.org/
[build-badge]: https://img.shields.io/travis/b2bfinance/konakaboo/master.png?style=flat-square
[build]: https://travis-ci.org/b2bfinance/konakaboo
[npm-badge]: https://img.shields.io/npm/v/@b2bfinance/konakaboo.png?style=flat-square
[npm]: https://www.npmjs.org/package/@b2bfinance/konakaboo
[coveralls-badge]: https://img.shields.io/coveralls/b2bfinance/konakaboo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/b2bfinance/konakaboo
