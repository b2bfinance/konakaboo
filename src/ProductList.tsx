import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { ProductWrapper } from "./ProductWrapper";
import { Product } from "./ProductTypes";

const useProductListEmptyStyles = makeStyles({
  name: "TabloProductListEmpty",
})((theme) => ({
  root: {
    margin: theme.spacing(10, 0),
    textAlign: "center",
  },
}));

const ProductListEmpty = () => {
  const { classes } = useProductListEmptyStyles();

  return (
    <Grid className={classes.root} container>
      <Grid item xs={12}>
        <Typography variant="h1">No products found</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" paragraph>
          It looks like we couldn't find any products matching your criteria.
        </Typography>
      </Grid>
    </Grid>
  );
};

export type ProductListProps = {
  products: Product[];
  limit: number;
  onMoreDetails: (product: Product) => void;
  onApply: (product: Product) => void;
  cta: string;
  ribbonText: string;
};

const useProductListStyles = makeStyles({
  name: "TabloProductList",
})(() => ({
  root: {},
}));

export const ProductList: React.FC<ProductListProps> = ({
  products,
  limit,
  onMoreDetails,
  onApply,
  cta,
  ribbonText,
}) => {
  const { classes } = useProductListStyles();
  const [productCount, setProductCount] = useState(limit);

  const handleLoadMore = () => {
    setProductCount(productCount + limit);
  };

  if (products.length === 0) {
    return <ProductListEmpty />;
  }

  return (
    <Box className={classes.root}>
      {products.slice(0, productCount).map((product, i) => (
        <ProductWrapper
          key={product.id || i}
          product={product}
          onMoreDetails={onMoreDetails}
          onApply={onApply}
          cta={cta}
          ribbonText={ribbonText}
        />
      ))}
      {products.length > productCount && (
        <Grid container>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLoadMore}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};
