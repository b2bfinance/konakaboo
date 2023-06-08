import { Drawer } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { ProductMoreInfoBody } from "./ProductMoreInfoBody";
import { ProductMoreInfoFooter } from "./ProductMoreInfoFooter";
import { ProductMoreInfoHeader } from "./ProductMoreInfoHeader";
import { Product, ProductDetailed } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloProductMoreInfo",
})(() => ({
  root: {
    "& .MuiPaper-root": {
      width: "60%",
      "@media(max-width: 1280px)": {
        width: "70%",
      },
      "@media(max-width: 960px)": {
        width: "85%",
      },
    },
  },
}));

export type ProductMoreInfoProps = {
  open: boolean;
  onClose: () => void;
  title: Product["title"];
  links: Product["links"];
  brand: Product["brand"];
  disclaimer?: Product["disclaimer"];
  description?: Product["description"];
  detailed: ProductDetailed[];
};

export const ProductMoreInfo: React.FC<ProductMoreInfoProps> = ({
  open,
  onClose,
  title,
  links,
  brand,
  disclaimer,
  description,
  detailed,
}) => {
  const { classes } = useStyles();

  return (
    <Drawer
      className={classes.root}
      anchor="right"
      open={open}
      onClose={onClose}
    >
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
