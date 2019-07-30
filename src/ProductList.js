import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useProductFetcher, useProductState, useConfigState } from "./hooks";
import ProductWrapper from "./ProductWrapper";
import ProductMask from "./ProductMask";

const useStyles = makeStyles(theme => ({
  productListWrapper: {
    opacity: props => (props.loading ? 0.75 : 1)
  },
  productListError: {
    backgroundColor: theme.palette.error.main,
    padding: theme.spacing(2),
    color: theme.palette.error.contrastText
  }
}));

const ProductList = () => {
  const { loading, error, data } = useProductState();
  const { loadingErrorMessage } = useConfigState();

  /**
   * Fetch our products and dispatch them through the product dispatcher which will
   * update our `productState`.
   */
  useProductFetcher();

  const classes = useStyles({
    loading: loading
  });

  if (error) {
    return <Typography className={classes.productListError}>{loadingErrorMessage}</Typography>;
  }

  if (loading && data.length === 0) {
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
      {data.map((product, i) => (
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
    </div>
  );
};

export default ProductList;
