import { Grid } from "@material-ui/core";
import React from "react";
import FilterList from "./FilterList";
import ProductList from "./ProductList";

const createFilterState = (filters = []) =>
  filters.map(filter => ({
    selected: [],
    ...filter,
  }));

const EmbedWrapper = ({
  products = [],
  productsLimit = 10,
  filters = [],
  cta = "Get Deal",
  onFilter = () => {},
  onMoreDetails = () => {},
  onApply = () => {},
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <FilterList filters={createFilterState(filters)} onFilter={onFilter} />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <ProductList
            products={products}
            limit={productsLimit}
            onMoreDetails={onMoreDetails}
            onApply={onApply}
            cta={cta}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmbedWrapper;
