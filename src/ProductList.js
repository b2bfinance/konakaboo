import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {
  useEmbedDispatch,
  useEmbedState,
  useProductFetcherEffect,
} from "./hooks";
import ProductMask from "./ProductMask";
import ProductPrimaryButton from "./ProductPrimaryButton";
import ProductWrapper from "./ProductWrapper";
import { PRODUCTS_INCREASE_LIMIT } from "./utils";

const useStyles = makeStyles(theme => ({
  productListWrapper: {
    opacity: props => (props.loading ? 0.75 : 1),
  },
  productListError: {
    backgroundColor: theme.palette.error.main,
    padding: theme.spacing(2),
    color: theme.palette.error.contrastText,
  },
}));

const ProductList = () => {
  const {
    products,
    productsLimit,
    productsLoading,
    productsError,
  } = useEmbedState();

  const dispatchAction = useEmbedDispatch();

  // Fetch our products using the provider given in the
  // config options. Preloaded products will be used
  // if we have them with no filters have been set.
  useProductFetcherEffect();

  const classes = useStyles({
    loading: productsLoading,
  });

  const handleLoadMore = () => {
    dispatchAction({
      type: PRODUCTS_INCREASE_LIMIT,
    });
  };

  if (productsError) {
    return (
      <Typography className={classes.productListError}>
        There were errors getting the products for you. Please retry or come
        back later
      </Typography>
    );
  }

  if (productsLoading && products.length === 0) {
    return (
      <React.Fragment>
        <ProductMask />
        <ProductMask />
        <ProductMask />
        <ProductMask />
        <ProductMask />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.productListWrapper}>
      {products.slice(0, productsLimit).map((product, i) => (
        <ProductWrapper
          key={product.id || i}
          highlighted={product.highlighted}
          labels={product.labels}
          title={product.title}
          links={product.links}
          brand={product.brand}
          columns={product.columns}
          description={product.description}
          featurePoint={product.feature_point}
          detailed={product.detailed}
          disclaimer={product.disclaimer}
          meta={product.meta}
          product={product}
        />
      ))}
      {products.length > productsLimit && (
        <Grid container justify="center">
          <Grid item>
            <ProductPrimaryButton
              variant="contained"
              color="secondary"
              onClick={handleLoadMore}
            >
              Load more
            </ProductPrimaryButton>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ProductList;
