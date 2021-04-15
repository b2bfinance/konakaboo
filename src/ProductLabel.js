import { Typography } from "@material-ui/core";
import {
  blue,
  blueGrey,
  orange,
  red,
  teal,
  yellow,
} from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const colors = {
  blue,
  blueGrey,
  red,
  orange,
  yellow,
  teal,
};

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      borderRadius: theme.spacing(2),
      padding: theme.spacing(0.25, 1),
      backgroundColor: (props) => props.colorGroup[500],
      marginRight: theme.spacing(1),
      "&:last-child": {
        marginRight: 0,
      },
    },
    text: {
      fontWeight: theme.typography.fontWeightBold,
      color: (props) => theme.palette.getContrastText(props.colorGroup[500]),
    },
  }),
  {
    name: "ProductLabel",
  }
);

const getLabel = (label) => {
  if (label.startsWith("#")) {
    const firstSpaceIndex = label.indexOf(" ");
    return [label.slice(1, firstSpaceIndex), label.slice(firstSpaceIndex + 1)];
  }

  return ["blueGrey", label];
};

const ProductLabel = ({ label }) => {
  const [color, text] = getLabel(label);

  const classes = useStyles({
    colorGroup: colors[color] || colors.blueGrey,
  });

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.text} color="inherit" variant="caption">
        {text}
      </Typography>
    </div>
  );
};

export default ProductLabel;
