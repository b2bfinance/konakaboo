import { Grid, Typography } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductLabels from "./ProductLabels";

const useStyles = makeStyles(theme => ({
  productHeadingWrapper: {
    backgroundColor: theme.palette.common.white,
    borderBottom: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      padding: 0,
    },
  },
  productLogoWrapper: {
    marginBottom: theme.spacing(1),
    height: theme.spacing(11),
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.common.white,
      display: "flex",
      padding: theme.spacing(1),
      marginRight: theme.spacing(1.5),
      border: `1px solid ${theme.palette.grey[200]}`,
      textAlign: "center",
    },
  },
  productLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  productHighlightedIcon: {
    marginLeft: theme.spacing(0.5),
    color: orange[300],
  },
  productLabels: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  },
}));

const ProductHeadingRow = ({ logo, brand, highlighted, title, labels }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.productHeadingWrapper}
      container
      alignItems="flex-start"
    >
      <Grid item xs={12} sm={3} md={2}>
        <div className={classes.productLogoWrapper}>
          <img className={classes.productLogo} src={logo} alt={brand} />
        </div>
      </Grid>
      <Grid item xs={12} sm={5} md={6}>
        <Typography color="textPrimary" component={Grid} container>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h5" component="p">
                  {brand}
                </Typography>
              </Grid>
              <Grid item>
                {highlighted && (
                  <WhatsHotIcon className={classes.productHighlightedIcon} />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
        </Typography>
      </Grid>
      {labels && labels.length > 0 && (
        <Grid className={classes.productLabels} item xs={12} sm={4} md={4}>
          <ProductLabels labels={labels} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductHeadingRow;
