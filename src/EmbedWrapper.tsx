import { Grid } from "@mui/material";
import React from "react";
import { FilterList } from "./FilterList";
import { ProductList } from "./ProductList";
import { Product, ProductFilter } from "./ProductTypes";

const noOp = () => {};

export type EmbedWrapperProps = {
  products?: Product[];
  productsLimit?: number;
  filters?: ProductFilter[];
  cta?: string;
  ribbonText?: string;
  onFilter?: (filters: ProductFilter[]) => void;
  onMoreDetails?: (product: Product) => void;
  onApply?: (product: Product) => void;
};

export const EmbedWrapper: React.FC<EmbedWrapperProps> = ({
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
