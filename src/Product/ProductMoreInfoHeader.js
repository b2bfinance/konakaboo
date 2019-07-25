import { Grid, Hidden, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  productMoreInfoHeaderWrapper: {
    padding: theme.spacing(1),
    borderBottom: `2px solid ${theme.palette.grey[100]}`
  },
  productMoreInfoHeaderLogoWrapper: {
    border: `2px solid ${theme.palette.grey[100]}`,
    display: "flex",
    height: 100,
    width: 150
  },
  productMoreInfoHeaderLogo: {
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto"
  },
  productMoreInfoHeaderCloseButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

const ProductMoreInfoHeader = ({ title, brand, logo, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.productMoreInfoHeaderWrapper}>
      <Grid container>
        <Hidden xsDown>
          <Grid item sm={3} md={3} xl={2}>
            <div className={classes.productMoreInfoHeaderLogoWrapper}>
              <img className={classes.productMoreInfoHeaderLogo} src={logo} alt={brand} />
            </div>
          </Grid>
        </Hidden>
        <Grid item sm={9} md={9} xl={10} mt={1}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">{brand}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">{title}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.productMoreInfoHeaderCloseButton}>
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductMoreInfoHeader;
