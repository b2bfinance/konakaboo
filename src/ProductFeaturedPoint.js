import { Grid, Typography } from "@material-ui/core";
import GradeOutline from "@material-ui/icons/GradeOutlined";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productFeaturePointWrapper: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(1, 2),
    lineHeight: 0
  },
  productFeaturePointIcon: {
    color: theme.palette.product.productFeaturedIconColor
  },
  productFeatureDescription: {
    marginLeft: theme.spacing(0.5)
  }
}));

const ProductFeaturePoint = ({ description }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.productFeaturePointWrapper} container alignItems="center">
      <Grid item>
        <div className={classes.productFeaturePointIcon}>
          <GradeOutline fontSize="small" />
        </div>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          <div className={classes.productFeatureDescription}>{description}</div>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductFeaturePoint;
