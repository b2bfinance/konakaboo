import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  productPrimaryButton: {
    boxShadow: "none",
    borderRadius: theme.spacing(10),
    color: theme.palette.common.white,
    display: "flex"
  }
}));

const productPrimaryButton = ({ children, className, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.productPrimaryButton, className)} variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};

export default productPrimaryButton;
