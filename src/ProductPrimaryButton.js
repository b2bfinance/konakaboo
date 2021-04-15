import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      boxShadow: "none",
      borderRadius: theme.spacing(10),
      color: theme.palette.common.white,
    },
  }),
  {
    name: "ProductPrimaryButton",
  }
);

const ProductPrimaryButton = ({ children, className, ...props }) => {
  const classes = useStyles();

  return (
    <Button
      className={clsx(classes.wrapper, className)}
      variant="contained"
      color="primary"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ProductPrimaryButton;
