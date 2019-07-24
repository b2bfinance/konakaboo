import { Typography } from "@material-ui/core";
import {
  blue,
  blueGrey,
  orange,
  red,
  teal,
  yellow
} from "@material-ui/core/colors";
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
  prodcutLabelWrapper: {
    borderRadius: theme.spacing(4),
    padding: theme.spacing(0.5, 1.5),
    backgroundColor: props => props.colorGroup[600],
    marginRight: theme.spacing(1),
    color: props =>
      getContrastRatio(props.colorGroup[600], props.colorGroup[50]) >= 3
        ? props.colorGroup[50]
        : colors.blueGrey[800],
    "&:last-child": {
      marginRight: 0
    }
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
    <div className={classes.prodcutLabelWrapper}>
      <Typography color="inherit" variant="caption">
        {text}
      </Typography>
    </div>
  );
};

export default ProductLabel;
