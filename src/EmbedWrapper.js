import { CssBaseline, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import EmbedContext from "./EmbedContext";
import FilterList from "./FilterList";
import { useEmbedReducer } from "./hooks";
import ProductList from "./ProductList";
import { SET_STATE } from "./utils";

const EmbedWrapper = props => {
  const [state, dispatch] = useEmbedReducer(props);

  useEffect(() => {
    dispatch({
      type: SET_STATE,
      payload: props,
    });
  }, [props]);

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
