import { Button, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductPrimaryButton from "./ProductPrimaryButton";

const useStyles = makeStyles(theme => ({
  productMoreInfoFooterWrapper: {
    borderTop: `2px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2),
    marginTop: "auto",
    minHeight: theme.spacing(11),
  },
  productMoreInfoFooterPrimaryButton: {
    display: "flex",
    marginLeft: "auto",
  },
}));

const ProductMoreInfoFooter = ({ link, onClose }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.productMoreInfoFooterWrapper}
      container
      alignItems="center"
      justify="space-between"
    >
      <Grid item xs={5} sm={7} lg={8}>
        <Button onClick={onClose} variant="text" size="small">
          <CloseIcon fontSize="small" /> close
        </Button>
      </Grid>
      <Grid item xs={7} sm={5} lg={4}>
        <ProductPrimaryButton
          className={classes.productMoreInfoFooterPrimaryButton}
          size="large"
          href={link}
        >
          Continue
        </ProductPrimaryButton>
      </Grid>
    </Grid>
  );
};

export default ProductMoreInfoFooter;
