import Grid from "@material-ui/core/Grid";
import React, { createContext } from "react";
import useEmbedReducer from "./useEmbedReducer";
import { ProductList } from "../Product";
import { CssBaseline } from "@material-ui/core";

export const EmbedContext = createContext();

const EmbedWrapper = ({ config, filters, products }) => {
  const embedReducer = useEmbedReducer({ config, filters, products });

  return (
    <EmbedContext.Provider value={embedReducer}>
      <CssBaseline />
      <Grid item xs={12}>
        filters
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
