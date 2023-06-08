import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { Product } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductColumns",
})((theme) => ({
  root: {},
  column: {
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2, 1),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      borderTop: 0,
      borderRight: `1px solid ${theme.palette.grey[200]}`,
    },
    "&:first-of-type": {
      borderTop: 0,
    },
  },
}));

export type ProductColumnsProps = {
  columns: Product["columns"];
};

export const ProductColumns: React.FC<ProductColumnsProps> = ({ columns }) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.root} container alignItems="center" height={1}>
      {columns.map((column, i) => (
        <Grid
          className={classes.column}
          item
          xs={12}
          sm={columns.length <= 1 ? 12 : 6}
          lg={12 / columns.length}
          key={i}
        >
          <Typography variant="subtitle2" component="div" color="textPrimary">
            {column.label}
          </Typography>
          <Typography variant="h5" component="div" color="textPrimary">
            {column.value}
          </Typography>
          {column.subtext && (
            <Typography variant="caption" component="div" color="textSecondary">
              {column.subtext}
            </Typography>
          )}
        </Grid>
      ))}
    </Grid>
  );
};
