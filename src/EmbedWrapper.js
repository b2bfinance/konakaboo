import { CssBaseline, Grid } from "@material-ui/core";
import React, { useReducer } from "react";
import EmbedContext from "./EmbedContext";
import FilterList from "./FilterList";
import { embedReducer } from "./utils";
import ProductList from "./ProductList";

const EmbedWrapper = ({
  products = [],
  productsLimit = 10,
  chosenFilters = [],
  availableFilters = [],
  cta = "Get Deal",
  provider = null,
  onMoreDetails = null,
  onApply = null,
}) => {
  if (!provider) {
    if (products.length === 0) {
      throw new Error("You must supply a provider or products.");
    }

    if (availableFilters.length > 0) {
      throw new Error("You must supply a provider when using filters.");
    }
  }

  const [state, dispatch] = useReducer(embedReducer, {
    products: [],
    productsLoading: false,
    productsError: false,
    productsLimit,
    preFetchedProducts: products,
    chosenFilters,
    availableFilters,
    cta,
    provider,
    onMoreDetails,
    onApply,
  });

  return (
    <EmbedContext.Provider value={{ state, dispatch }}>
      <CssBaseline />
      <Grid item xs={12}>
        <FilterList />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <ProductList />
        </Grid>
      </Grid>
    </EmbedContext.Provider>
  );
};

export default EmbedWrapper;
