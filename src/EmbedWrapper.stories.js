import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import theme from "../src/utils/theme";
import { addSelectedToMany, generateFilters, generateProducts } from "../test";
import EmbedWrapper from "./EmbedWrapper";

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <EmbedWrapper {...args} />
  </ThemeProvider>
);

export default {
  title: "EmbedWrapper",
  component: Template,
  argTypes: {
    onApply: {
      action: "onApply",
    },
    onMoreDetails: {
      action: "onMoreDetails",
    },
    onFilter: {
      action: "onFilter",
    },
  },
};

const genericArgs = {
  products: generateProducts(3),
};

export const WithProducts = Template.bind({});
WithProducts.args = {
  ...genericArgs,
};

export const WithLimitedProducts = Template.bind({});
WithLimitedProducts.args = {
  ...genericArgs,
  productsLimit: 1,
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  ...genericArgs,
  filters: generateFilters(3),
};

export const WithSelectedFilters = Template.bind({});
WithSelectedFilters.args = {
  ...genericArgs,
  filters: addSelectedToMany(generateFilters(3)),
};

export const WithNoProducts = Template.bind({});
WithNoProducts.args = {
  ...genericArgs,
  products: [],
};
