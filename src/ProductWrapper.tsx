import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { ProductColumns } from "./ProductColumns";
import { ProductConfirm } from "./ProductConfirm";
import { ProductFeaturedPoint } from "./ProductFeaturedPoint";
import { ProductHeadingRow } from "./ProductHeadingRow";
import { ProductMoreInfo } from "./ProductMoreInfo";
import { Product } from "./ProductTypes";

const useStyles = makeStyles<{ faded: boolean }>({
  name: "TabloProductWrapper",
})((theme, { faded }) => ({
  root: {
    opacity: faded ? 0.6 : 1,
    marginBottom: theme.spacing(8),
  },
  body: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  description: {
    width: "100%",
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2),
  },
  actionsColumn: {
    textAlign: "center",
    padding: theme.spacing(2, 4),
  },
  moreInfoButton: {
    margin: "0 auto",
    textTransform: "lowercase",
    color: theme.palette.info.dark,
  },
  applyButton: {
    marginTop: theme.spacing(0.5),
    width: "100%",
    textTransform: "capitalize",
  },
}));

type ProductWrapperProps = {
  product: Product;
  onMoreDetails?: (product: Product) => void;
  onApply?: (product: Product) => void;
  cta?: string;
  ribbonText?: string;
};

export const ProductWrapper: React.FC<ProductWrapperProps> = ({
  product,
  onMoreDetails,
  onApply,
  cta,
  ribbonText,
}) => {
  const { classes } = useStyles({
    faded: product.meta.faded,
  });
  const [withInfo, setWithInfo] = useState(false);
  const [withConfirmation, setWithConfirmation] = useState(false);

  function handleMoreInfoClick() {
    if (typeof onMoreDetails === "function") {
      onMoreDetails(product);
    }

    setWithInfo(true);
  }

  function handleApplyButtonClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (typeof onApply === "function") {
      onApply(product);
    }

    if (product.meta.confirm) {
      if (product.meta.confirm.heading || product.meta.confirm.description) {
        e.preventDefault();
        setWithConfirmation(true);
      }
    }
  }

  return (
    <div className={classes.root}>
      <ProductHeadingRow
        logo={product.links.logo}
        brand={product.brand}
        highlighted={product.highlighted}
        title={product.title}
        labels={product.labels}
        ribbonText={ribbonText}
      />
      <Grid className={classes.body} container>
        <Grid item xs={12} lg={9}>
          <ProductColumns columns={product.columns} />
        </Grid>
        <Grid className={classes.actionsColumn} item xs={12} lg={3}>
          {product.detailed.length > 0 && (
            <Button
              className={classes.moreInfoButton}
              variant="text"
              size="small"
              onClick={handleMoreInfoClick}
            >
              more details
            </Button>
          )}
          <Button
            className={classes.applyButton}
            variant="contained"
            size="large"
            href={product.links.apply}
            disableElevation
            target="_blank"
            rel="noopener"
            onClick={handleApplyButtonClick}
          >
            {cta}
          </Button>
        </Grid>
        {product.description && (
          <Box
            className={classes.description}
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
          </Box>
        )}
      </Grid>
      {product.feature_point && (
        <Grid container>
          <ProductFeaturedPoint description={product.feature_point} />
        </Grid>
      )}
      {product.detailed.length > 0 && (
        <ProductMoreInfo
          open={withInfo}
          onClose={() => setWithInfo(false)}
          title={product.title}
          links={product.links}
          brand={product.brand}
          description={product.description}
          detailed={product.detailed}
          disclaimer={product.disclaimer}
        />
      )}
      {product.meta.confirm && (
        <ProductConfirm
          open={withConfirmation}
          handleRequestClose={() => setWithConfirmation(false)}
          title={product.meta.confirm.heading}
          description={product.meta.confirm.description}
          forwardUrl={product.links.apply}
        />
      )}
    </div>
  );
};
