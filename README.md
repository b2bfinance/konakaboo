# Tablo

[![Storybook][storybook-badge]][storybook]
[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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
import { ThemeProvider } from "@material-ui/styles";
import { EmbedWrapper, theme } from "@b2bfinance/tablo";

function App() {
  const noOp = () => {};

  return (
    <ThemeProvider theme={theme}>
      <EmbedWrapper
        products={[]}
        productsLimit={10}
        filters={[]}
        cta={"Get Deal"}
        onMoreDetails={noOp}
        onApply={noOp}
        onFilter={noOp}
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
  issuer: String;
  title: String;
  brand: String;
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
[storybook]: https://b2bfinance.github.io/tablo/
[build-badge]: https://img.shields.io/travis/b2bfinance/tablo/master.png?style=flat-square
[build]: https://travis-ci.org/b2bfinance/tablo
[npm-badge]: https://img.shields.io/npm/v/@b2bfinance/tablo.png?style=flat-square
[npm]: https://www.npmjs.org/package/@b2bfinance/tablo
[coveralls-badge]: https://img.shields.io/coveralls/b2bfinance/tablo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/b2bfinance/tablo
