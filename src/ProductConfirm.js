import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductPrimaryButton from "./ProductPrimaryButton";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      textAlign: "center",
    },
    actions: {
      margin: `${theme.spacing(2)}px auto`,
    },
  }),
  {
    name: "ProductConfirm",
  }
);

const ProductConfirm = ({
  open,
  handleRequestClose,
  title,
  description,
  forwardUrl,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      className={classes.wrapper}
      open={open}
      onClose={handleRequestClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <Grid container>
          <Grid className={classes.actions} item xs={12} sm={8} lg={4}>
            <ProductPrimaryButton size="large" href={forwardUrl}>
              Confirm
            </ProductPrimaryButton>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ProductConfirm;
