import { CssBaseline, Grid } from "@material-ui/core";
import React from "react";
import FilterList from "./FilterList";
import { useEmbedReducer } from "./hooks";
import ProductList from "./ProductList";
import EmbedContext from "./EmbedContext";

const EmbedWrapper = ({ config, filters, products }) => {
  const embedReducer = useEmbedReducer({ config, filters, products });

  return (
    <EmbedContext.Provider value={embedReducer}>
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
