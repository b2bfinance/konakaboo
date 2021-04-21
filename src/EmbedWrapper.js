import { Grid } from "@material-ui/core";
import React from "react";
import FilterList from "./FilterList";
import ProductList from "./ProductList";

const noOp = () => {};

const EmbedWrapper = ({
  products = [],
  productsLimit = 10,
  filters = [],
  cta = "Get Deal",
  ribbonText = "Hot",
  onFilter = noOp,
  onMoreDetails = noOp,
  onApply = noOp,
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FilterList filters={filters} onFilter={onFilter} />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <ProductList
            products={products}
            limit={productsLimit}
            onMoreDetails={onMoreDetails}
            onApply={onApply}
            cta={cta}
            ribbonText={ribbonText}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmbedWrapper;
