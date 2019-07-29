import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productColumnWrapper: {
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2, 1),
    textAlign: "center",
    flexGrow: 0,
    flexBasis: "100%",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      flexBasis: props => `${props.width}%`,
      maxWidth: props => `${props.width}%`,
      margin: theme.spacing(2, 0),
      padding: theme.spacing(0, 2),
      borderTop: 0,
      borderRight: `1px solid ${theme.palette.grey[200]}`
    },
    "&:first-child": {
      borderTop: 0
    }
  }
}));

const ProductColumns = ({ columns }) => {
  const classes = useStyles({
    width: 75 / columns.length
  });

  return columns.map((column, i) => (
    <div className={classes.productColumnWrapper} key={i}>
      <Typography variant="subtitle2" color="textPrimary">
        {column.label}
      </Typography>
      <Typography variant="h5" color="textPrimary">
        {column.value}
      </Typography>
      {column.subtext && (
        <Typography variant="caption" color="textSecondary">
          {column.subtext}
        </Typography>
      )}
    </div>
  ));
};

export default ProductColumns;
