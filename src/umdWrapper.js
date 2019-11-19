import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import ReactDOM from "react-dom";
import EmbedWrapper from "./EmbedWrapper";
import { theme as muiTheme } from "./utils/theme";

const renderProducts = ({
  theme,
  selector,
  products,
  productsLimit,
  filters,
  cta,
  provider,
  onMoreDetails,
  onApply,
}) => {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(
      `Cannot render products into ${selector} as it does not exist in the document.`
    );
  }

  ReactDOM.render(
    <ThemeProvider theme={theme ? createMuiTheme(theme) : muiTheme}>
      <EmbedWrapper
        products={products}
        productsLimit={productsLimit}
        filters={filters}
        cta={cta}
        provider={provider}
        onMoreDetails={onMoreDetails}
        onApply={onApply}
      />
    </ThemeProvider>,
    element
  );
};

export default {
  renderProducts,
};
