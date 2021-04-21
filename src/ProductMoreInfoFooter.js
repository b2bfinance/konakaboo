import { Button, Grid, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductPrimaryButton from "./ProductPrimaryButton";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      borderColor: theme.tablo.productMoreInfoFooter.border,
    },
    primaryButton: {
      display: "flex",
      marginLeft: "auto",
    },
  }),
  {
    name: "ProductMoreInfoFooter",
  }
);

const ProductMoreInfoFooter = ({ link, onClose }) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.wrapper}
      mt="auto"
      p={2}
      minHeight={80}
      borderTop={2}
    >
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={5} sm={7} lg={8}>
          <Button onClick={onClose} variant="text" size="small">
            <CloseIcon fontSize="small" /> close
          </Button>
        </Grid>
        <Grid item xs={7} sm={5} lg={4}>
          <ProductPrimaryButton
            className={classes.primaryButton}
            size="large"
            href={link}
          >
            Continue
          </ProductPrimaryButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductMoreInfoFooter;
