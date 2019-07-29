import { Typography } from "@material-ui/core";
import { blue, blueGrey, orange, red, teal, yellow } from "@material-ui/core/colors";
import { getContrastRatio } from "@material-ui/core/styles/colorManipulator";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const colors = {
  blue,
  blueGrey,
  red,
  orange,
  yellow,
  teal
};

const useStyles = makeStyles(theme => ({
  productLabelWrapper: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(0.5, 1.5),
    border: "1px solid",
    borderColor: props => props.colorGroup[500],
    marginRight: theme.spacing(1),
    "&:last-child": {
      marginRight: 0
    }
  },
  productLabelText: {
    fontWeight: theme.typography.fontWeightBold,
    color: props => props.colorGroup[500]
  }
}));

const getLabel = label => {
  if (label.startsWith("#")) {
    const firstSpaceIndex = label.indexOf(" ");
    return [label.slice(1, firstSpaceIndex), label.slice(firstSpaceIndex + 1)];
  }

  return ["blueGrey", label];
};

const ProductLabel = ({ label }) => {
  const classes = useStyles({ colorGroup: colors[color] || colors.blueGrey });
  const [color, text] = getLabel(label);

  return (
    <div className={classes.productLabelWrapper}>
      <Typography className={classes.productLabelText} color="inherit" variant="caption">
        {text}
      </Typography>
    </div>
  );
};

export default ProductLabel;
