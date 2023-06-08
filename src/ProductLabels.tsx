import { Box } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { ProductLabel } from "./ProductLabel";
import { Product } from "./ProductTypes";

const useStyles = makeStyles({ name: "TabloProductLabels" })((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    lineHeight: 1,
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0.5, 0),
    },
  },
}));

export type ProductLabelsProps = {
  labels: Product["labels"];
};

const ProductLabels: React.FC<ProductLabelsProps> = ({ labels }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      {labels.map((label, i) => (
        <ProductLabel key={i} label={label} />
      ))}
    </Box>
  );
};

export default ProductLabels;
