import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { render } from "react-dom";
import EmbedWrapper from "./EmbedWrapper";
import { theme as muiTheme } from "./utils";

const renderProducts = ({
  selector,
  products,
  productsLimit,
  chosenFilters,
  availableFilters,
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

  render(
    <ThemeProvider theme={theme ? createMuiTheme(theme) : muiTheme}>
      <EmbedWrapper
        products={products}
        productsLimit={productsLimit}
        chosenFilters={chosenFilters}
        availableFilters={availableFilters}
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
