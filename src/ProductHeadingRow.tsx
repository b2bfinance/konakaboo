import WhatsHotIcon from "@mui/icons-material/Whatshot";
import { Grid, Typography } from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import React from "react";
import { makeStyles } from "tss-react/mui";
import ProductLabels from "./ProductLabels";
import { Product, ProductLinks } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductHeadingRow",
})((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: theme.palette.common.white,
    borderBottom: 0,
    padding: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      backgroundColor: "transparent",
      padding: 0,
    },
  },
  logoWrapper: {
    marginBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: theme.spacing(11),
      padding: theme.spacing(1),
      marginRight: theme.spacing(1.5),
      border: `1px solid ${theme.palette.grey[200]}`,
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
    color: orange[300],
  },
  ribbon: {
    position: "absolute",
    transform: "rotate(45deg)",
    width: theme.spacing(17),
    top: theme.spacing(2),
    right: theme.spacing(-5),
    textAlign: "center",
    backgroundColor: orange[300],
    color: theme.palette.getContrastText(orange[300]),
    [theme.breakpoints.up("md")]: {
      transform: "rotate(-45deg)",
      left: theme.spacing(-5),
      right: "unset",
    },
  },
}));

export type ProductHeadingRowProps = {
  logo: ProductLinks["logo"];
  brand: Product["brand"];
  highlighted: Product["highlighted"];
  ribbonText?: string;
  title: Product["title"];
  labels?: Product["labels"];
};

export const ProductHeadingRow: React.FC<ProductHeadingRowProps> = ({
  logo,
  brand,
  highlighted,
  ribbonText,
  title,
  labels,
}) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.root} container alignItems="flex-start">
      <Grid item xs={12} sm={3} md={2}>
        <div className={classes.logoWrapper}>
          <img className={classes.logo} src={logo} alt={brand} />
        </div>
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Typography color="textPrimary" component={Grid} container>
          <Grid item xs={12}>
            <Grid container alignItems="center">
              <Grid item xs="auto">
                <Typography variant="h5" component="p">
                  {brand}
                </Typography>
              </Grid>
              {highlighted && (
                <Grid item xs="auto">
                  <WhatsHotIcon className={classes.highlightedIcon} />
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography>{title}</Typography>
            {labels && labels.length > 0 ? (
              <ProductLabels labels={labels} />
            ) : null}
          </Grid>
        </Typography>
      </Grid>
      {highlighted && ribbonText && (
        <div className={classes.ribbon}>
          <Typography variant="body2">{ribbonText}</Typography>
        </div>
      )}
    </Grid>
  );
};
