import { Color, Typography } from "@mui/material";
import {
  blue,
  blueGrey,
  orange,
  red,
  teal,
  yellow,
} from "@mui/material/colors";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { Product } from "./ProductTypes";

const colors = {
  blue,
  blueGrey,
  red,
  orange,
  yellow,
  teal,
};

const useStyles = makeStyles<{ colorGroup: Color }>({
  name: "TabloProductLabel",
})((theme, { colorGroup }) => ({
  root: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(0.25, 1),
    backgroundColor: colorGroup[500],
    marginRight: theme.spacing(1),
    "&:last-of-type": {
      marginRight: 0,
    },
  },
  text: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.getContrastText(colorGroup[500]),
  },
}));

const unpackLabel = (label: string): [keyof typeof colors, string] => {
  const colorKey = label.slice(1, label.indexOf(" "));

  //Check if colorKey matches the key of a color in the colors object
  if (Object.keys(colors).indexOf(colorKey) !== -1) {
    return [
      colorKey as keyof typeof colors,
      label.slice(label.indexOf(" ")).trim(),
    ];
  }

  return ["blueGrey", label.trim()];
};

export type ProductLabelProps = {
  label: Product["labels"][number];
};

export const ProductLabel: React.FC<ProductLabelProps> = ({ label }) => {
  const [color, text] = unpackLabel(label);

  const { classes } = useStyles({
    colorGroup: colors[color] || colors.blueGrey,
  });

  return (
    <div className={classes.root}>
      <Typography className={classes.text} color="inherit" variant="caption">
        {text}
      </Typography>
    </div>
  );
};
