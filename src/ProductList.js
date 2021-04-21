import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import ProductPrimaryButton from "./ProductPrimaryButton";
import ProductWrapper from "./ProductWrapper";

const useProductListEmptyStyles = makeStyles(
  (theme) => ({
    wrapper: {
      margin: theme.spacing(10, 0),
      textAlign: "center",
    },
  }),
  {
    name: "ProductListEmpty",
  }
);

const ProductListEmpty = () => {
  const classes = useProductListEmptyStyles();

  return (
    <Grid className={classes.wrapper} container>
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

const ProductList = ({
  products,
  limit,
  onMoreDetails,
  onApply,
  cta,
  ribbonText,
}) => {
  const [productCount, setProductCount] = useState(limit);

  const handleLoadMore = () => {
    setProductCount(productCount + limit);
  };

  if (products.length === 0) {
    return <ProductListEmpty />;
  }

  return (
    <React.Fragment>
      {products.slice(0, productCount).map((product, i) => (
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
          onMoreDetails={onMoreDetails}
          onApply={onApply}
          cta={cta}
          ribbonText={ribbonText}
        />
      ))}
      {products.length > productCount && (
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
    </React.Fragment>
  );
};

export default ProductList;
