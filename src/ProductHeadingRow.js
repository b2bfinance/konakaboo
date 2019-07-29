import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import ProductLabels from "./ProductLabels";

const useStyles = makeStyles(theme => ({
  productHeadingWrapper: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      backgroundColor: "transparent",
      padding: 0,
      borderBottom: 0
    }
  },
  productLogoWrapper: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      backgroundColor: theme.palette.common.white,
      display: "flex",
      padding: theme.spacing(1),
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(1.5),
      border: `1px solid ${theme.palette.grey[100]}`,
      marginBottom: theme.spacing(-1),
      textAlign: "center",
      height: theme.spacing(11)
    }
  },
  productLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  productHighlightedIcon: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.product.headingHighlightIcon
  },
  productLabels: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    }
  }
}));

const ProductHeadingRow = ({ logo, brand, highlighted, title, labels }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.productHeadingWrapper} container alignItems="flex-start">
      <Grid item xs={12} sm={3} md={2}>
        <div className={classes.productLogoWrapper}>
          <img className={classes.productLogo} src={logo} alt={brand} />
        </div>
      </Grid>
      <Grid item xs={12} sm={5} md={7}>
        <Typography color="textPrimary" component={Grid} container>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h5" component="p">
                  {brand}
                </Typography>
              </Grid>
              <Grid item>{highlighted && <WhatsHotIcon className={classes.productHighlightedIcon} />}</Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
          </Grid>
        </Typography>
      </Grid>
      {labels && labels.length > 0 && (
        <Grid className={classes.productLabels} item xs={12} sm={4} md={3}>
          <ProductLabels labels={labels} />
        </Grid>
      )}
    </Grid>
  );
};

export default ProductHeadingRow;
