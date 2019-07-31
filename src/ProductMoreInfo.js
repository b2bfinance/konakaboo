import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ProductMoreInfoBody from "./ProductMoreInfoBody";
import ProductMoreInfoFooter from "./ProductMoreInfoFooter";
import ProductMoreInfoHeader from "./ProductMoreInfoHeader";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "60%",
    "@media(max-width: 1280px)": {
      width: "70%",
    },
    "@media(max-width: 960px)": {
      width: "85%",
    },
  },
}));

export default ({
  open,
  onClose,
  title,
  links,
  brand,
  disclaimer,
  description,
  detailed,
}) => {
  const classes = useStyles();

  return (
    <Drawer classes={classes} anchor="right" open={open} onClose={onClose}>
      <ProductMoreInfoHeader
        brand={brand}
        title={title}
        logo={links.logo}
        onClose={onClose}
      />
      <ProductMoreInfoBody
        description={description}
        detailed={detailed}
        disclaimer={disclaimer}
      />
      <ProductMoreInfoFooter link={links.apply} onClose={onClose} />
    </Drawer>
  );
};
