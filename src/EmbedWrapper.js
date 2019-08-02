import { CssBaseline, Grid } from "@material-ui/core";
import React, { useReducer } from "react";
import EmbedContext from "./EmbedContext";
import FilterList from "./FilterList";
import { embedReducer, makeFilterQueryString } from "./utils";
import ProductList from "./ProductList";

const EmbedWrapper = ({
  products = [],
  productsLimit = 10,
  filters = [],
  cta = "Get Deal",
  provider = null,
  onMoreDetails = null,
  onApply = null,
}) => {
  const [state, dispatch] = useReducer(embedReducer, {
    products: [],
    productsLoading: false,
    productsError: false,
    filterQuery: makeFilterQueryString(filters),
    productsLimit,
    preFetchedProducts: products,
    filters,
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
