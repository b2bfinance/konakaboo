import { Grid, Hidden, IconButton, Typography, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(
  (theme) => ({
    header: {
      borderBottom: `2px solid ${theme.palette.grey[200]}`,
    },
    headerLogo: {
      maxWidth: "100%",
      maxHeight: "100%",
      margin: "auto",
    },
  }),
  {
    name: "ProductMoreInfoHeader",
  }
);

const ProductMoreInfoHeader = ({ title, brand, logo, onClose }) => {
  const classes = useStyles();

  return (
    <Box className={classes.header} p={1}>
      <Grid container>
        <Hidden xsDown>
          <Grid item sm={3} md={3} xl={2}>
            <Box
              display="flex"
              border={2}
              p={1}
              height={100}
              width={150}
              borderColor="grey.200"
            >
              <img className={classes.headerLogo} src={logo} alt={brand} />
            </Box>
          </Grid>
        </Hidden>
        <Grid item sm={9} md={9} xl={10}>
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
      <Box position="absolute" mt={1} mr={1} top={0} right={0}>
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductMoreInfoHeader;
