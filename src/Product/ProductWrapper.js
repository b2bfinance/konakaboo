import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useContext, useState } from "react";
import { EmbedContext } from "../EmbedWrapper";
import ProductHeadingRow from "./ProductHeadingRow";

const useStyles = makeStyles(theme => ({
  productWrapper: {
    opacity: props => (props.faded ? 0.6 : 1)
  },
  productBody: {
    backgroundColor: theme.palette.common.white
  },
  productDescription: {
    borderTop: `1px solid ${theme.palette.grey[100]}`,
    padding: theme.spacing(2)
  }
}));

const ProductWrapper = ({
  highlighted,
  labels,
  title,
  links,
  brand,
  columns,
  description,
  featurePoint,
  detailed,
  disclaimer,
  meta
}) => {
  const classes = useStyles({
    faded: meta.faded
  });

  const [withInfo, setWithInfo] = useState(false);
  const [withConfirmation, setWithConfirmation] = useState(false);

  const {
    config: [config]
  } = useContext(EmbedContext);

  const handleApplyButtonClick = e => {
    config.onApply();

    if (meta.confirm) {
      e.preventDefault();
      setWithConfirmation(true);
    }
  };

  return (
    <div className={classes.productBody}>
      <ProductHeadingRow
        logo={links.logo}
        brand={brand}
        highlighted={highlighted}
        title={title}
        labels={labels}
      />
      <Grid className={classes.productBody} container>
        <Grid item xs={12} sm={9}>
          grid
        </Grid>
        <Grid item xs={12} sm={3}>
          <Grid container alignContent="center">
            <Grid item xs={12}>
              {detailed && "MoreInfoButton"}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="medium"
                href={links.apply}
                target="_blank"
                rel="noopener"
                onClick={handleApplyButtonClick}
              >
                {config.cta}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Hidden xsDown>
          {description && (
            <Typography className={classes.productDescription} variant="body2">
              {description}
            </Typography>
          )}
          {featurePoint && "Feature Point"}
        </Hidden>
      </Grid>
      {detailed && "MoreInfo"}
      {meta.confirm && "Confirm"}
    </div>
  );
};

export default ProductWrapper;
