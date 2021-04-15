import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      marginBottom: theme.spacing(6),
      backgroundColor: theme.palette.grey[200],
      height: theme.spacing(20),
    },
  }),
  {
    name: "ProductMask",
  }
);

const ProductMask = () => {
  const classes = useStyles();
  return <div className={classes.productMaskWrapper} />;
};

export default ProductMask;
