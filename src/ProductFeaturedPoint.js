import { Grid, Typography } from "@material-ui/core";
import { pink } from "@material-ui/core/colors";
import GradeOutline from "@material-ui/icons/GradeOutlined";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      backgroundColor: theme.palette.grey[200],
      padding: theme.spacing(1, 2),
      lineHeight: 1,
    },
    icon: {
      color: pink[300],
    },
    description: {
      marginLeft: theme.spacing(0.5),
    },
  }),
  {
    name: "ProductFeaturePoint",
  }
);

const ProductFeaturePoint = ({ description }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container alignItems="center">
      <Grid item>
        <div className={classes.icon}>
          <GradeOutline fontSize="small" />
        </div>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          <div className={classes.description}>{description}</div>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductFeaturePoint;
