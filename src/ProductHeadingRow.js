import { Grid, Typography } from "@material-ui/core";
import WhatsHotIcon from "@material-ui/icons/Whatshot";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductLabels from "./ProductLabels";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      backgroundColor: theme.tablo.productHeadingRow.backgroundMobile,
      borderBottom: 0,
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.tablo.productHeadingRow.background,
        padding: 0,
      },
    },
    logoWrapper: {
      marginBottom: theme.spacing(1),
      height: theme.spacing(11),
      backgroundColor: theme.tablo.productHeadingRow.logoBackground,
      [theme.breakpoints.up("md")]: {
        display: "flex",
        padding: theme.spacing(1),
        marginRight: theme.spacing(1.5),
        border: `1px solid ${theme.tablo.productHeadingRow.logoBorder}`,
        textAlign: "center",
      },
    },
    logo: {
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "auto",
    },
    highlightedIcon: {
      marginLeft: theme.spacing(0.5),
      color: theme.tablo.productHeadingRow.highlightedIcon,
    },
  }),
  {
    name: "ProductHeadingRow",
  }
);

const ProductHeadingRow = ({ logo, brand, highlighted, title, labels }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.wrapper} container alignItems="flex-start">
      <Grid item xs={12} sm={3} md={2}>
        <div className={classes.logoWrapper}>
          <img className={classes.logo} src={logo} alt={brand} />
        </div>
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
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
                  <WhatsHotIcon className={classes.highlightedIcon} />
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
            {labels && labels.length > 0 && <ProductLabels labels={labels} />}
          </Grid>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductHeadingRow;
