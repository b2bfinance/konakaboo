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
import { FILTERS_RESET, PRODUCTS_INCREASE_LIMIT } from "./utils";

const useStyles = makeStyles(theme => ({
  productListWrapper: {
    opacity: props => (props.loading ? 0.75 : 1),
  },
  productListError: {
    backgroundColor: theme.palette.error.main,
    padding: theme.spacing(2),
    color: theme.palette.error.contrastText,
  },
  productListEmptyWrapper: {
    margin: theme.spacing(10, 0),
    textAlign: "center",
  },
}));

const ProductListLoading = () => (
  <React.Fragment>
    <ProductMask />
    <ProductMask />
    <ProductMask />
    <ProductMask />
    <ProductMask />
  </React.Fragment>
);

const ProductListError = ({ classes }) => (
  <Typography className={classes.productListError}>
    There were errors getting the products for you. Please retry or come back
    later
  </Typography>
);

const ProductListEmpty = ({ classes }) => {
  const { filters } = useEmbedState();
  const dispatchAction = useEmbedDispatch();
  const hasFilters = filters.some(filter => filter.selected.length > 0);

  const handleResetFilters = () => {
    dispatchAction({
      type: FILTERS_RESET,
    });
  };

  return (
    <Grid className={classes.productListEmptyWrapper} container>
      <Grid item xs={12}>
        <Typography variant="h1">No products found</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="textSecondary" paragraph>
          It looks like we couldn't find any products for you.
        </Typography>
      </Grid>
      {hasFilters && (
        <Grid item xs={12}>
          <ProductPrimaryButton
            color="secondary"
            size="large"
            onClick={handleResetFilters}
          >
            Reset Filters
          </ProductPrimaryButton>
        </Grid>
      )}
    </Grid>
  );
};

const ProductList = () => {
  const {
    products,
    productsLimit,
    productsLoading,
    productsError,
  } = useEmbedState();

  const dispatchAction = useEmbedDispatch();

  // Fetch our products using the provider given in the
  // config options. Products supplied as a prop will be used
  // on the first render.
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
    return <ProductListError classes={classes} />;
  }

  if (productsLoading && products.length === 0) {
    return <ProductListLoading />;
  }

  if (products.length === 0) {
    return <ProductListEmpty classes={classes} />;
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
