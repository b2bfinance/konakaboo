import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productMaskWrapper: {
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(20),
  },
}));

const ProductMask = () => {
  const classes = useStyles();
  return <div className={classes.productMaskWrapper} />;
};

export default ProductMask;
