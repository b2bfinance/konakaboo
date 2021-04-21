# Tablo

[![Storybook][storybook-badge]][storybook]
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
import { ThemeProvider } from "@material-ui/styles";
import { EmbedWrapper, theme } from "@b2bfinance/tablo";

function Tablo() {
  const noOp = () => {};

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

ReactDOM.render(
  <Tablo />,
  document.querySelector("#element-to-render-products-into")
);
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
  columns: [
    {
      label: String;
      value: String;
    }
  ];
  detailed: [
    {
      title: String;
      rows: [
        {
          label: String;
          value: String;
        }
      ];
    }
  ];
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
  choices: [
    {
      label: String;
      value: String;
    }
  ];
};
```

### Theme Options

You can use a custom theme by creating your own [MuiTheme](https://material-ui.com/customization/default-theme/#default-theme) and using that in your `ThemeProvider` instead of the one exported from Tablo.

When creating your own theme there are a few Tablo specific options which must be supplied. You can see the defaults below.

```
{
  "productHeadingRow": {
    "logoBorder": "#eeeeee",
    "background": "transparent",
    "backgroundMobile": "white",
    "logoBackground": "white",
    "highlightedIcon": "#ffb74d"
    "ribbonBackground": "#ffb74d",
  },
  "productWrapper": {
    "bodyBackground": "white",
    "bodyBorder": "#eeeeee",
    "moreInfoColor": "#1565c0",
    "descriptionBorder": "#eeeeee"
  },
  "productColumns": {
    "border": "#eeeeee"
  },
  "productFeaturePoint": {
    "background": "#eeeeee",
    "icon": "#f06292",
    "text": null // uses the default material text color.
  },
  "productMoreInfoHeader": {
    "headerBorder": "#eeeeee"
  },
  "productMoreInfoBody": {
    "disclaimerBackground": "#eeeeee"
  },
  "productMoreInfoFooter": {
    "border": "#eeeeee"
  }
}
```

[storybook-badge]: https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg
[storybook]: https://b2bfinance.github.io/tablo/
[npm-badge]: https://img.shields.io/npm/v/@b2bfinance/tablo.png?style=flat-square
[npm]: https://www.npmjs.org/package/@b2bfinance/tablo
