import GradeOutline from "@mui/icons-material/GradeOutlined";
import { Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { Product } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductFeaturedPoint",
})((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(1, 2),
    lineHeight: 1,
    minHeight: theme.spacing(5),
  },
  icon: {
    color: pink[300],
  },
  description: {
    marginLeft: theme.spacing(0.5),
  },
}));

export type ProductFeaturedPointProps = {
  description: Product["description"];
};

export const ProductFeaturedPoint: React.FC<ProductFeaturedPointProps> = ({
  description,
}) => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.root} container alignItems="center">
      {description && (
        <>
          <Grid item>
            <GradeOutline className={classes.icon} fontSize="small" />
          </Grid>
          <Grid item>
            <Typography className={classes.description} variant="subtitle1">
              {description}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};
