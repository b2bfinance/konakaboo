import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "TabloProductMask",
})((theme) => ({
  root: {
    marginBottom: theme.spacing(6),
    backgroundColor: theme.palette.grey[200],
    height: theme.spacing(20),
  },
}));

export type ProductMaskProps = {};

export const ProductMask: React.FC<ProductMaskProps> = () => {
  const { classes } = useStyles();
  return <div className={classes.root} />;
};
