import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useEmbedState } from "./hooks";
import ProductColumns from "./ProductColumns";
import ProductConfirm from "./ProductConfirm";
import ProductFeaturedPoint from "./ProductFeaturedPoint";
import ProductHeadingRow from "./ProductHeadingRow";
import ProductMoreInfo from "./ProductMoreInfo";
import ProductPrimaryButton from "./ProductPrimaryButton";

const useStyles = makeStyles(theme => ({
  productWrapper: {
    opacity: props => (props.faded ? 0.6 : 1),
    marginBottom: theme.spacing(6),
  },
  productBody: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[200]}`,
  },
  productDescription: {
    width: "100%",
    borderTop: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing(2),
  },
  productActionsColumn: {
    padding: theme.spacing(2, 4),
  },
  productMoreInfoButton: {
    padding: theme.spacing(0, 1),
    display: "flex",
    justifySelf: "center",
    textTransform: "lowercase",
    color: blue[800],
  },
  productApplyButton: {
    marginTop: theme.spacing(0.5),
    width: "100%",
  },
}));

const ProductWrapper = ({
  highlighted,
  labels,
  title,
  links,
  brand,
  columns,
  description,
  featurePoint,
  detailed,
  disclaimer,
  meta,
  product,
}) => {
  const classes = useStyles({
    faded: meta.faded,
  });
  const [withInfo, setWithInfo] = useState(false);
  const [withConfirmation, setWithConfirmation] = useState(false);
  const { onMoreDetails, onApply, cta } = useEmbedState();

  const handleMoreInfoClick = () => {
    if (onMoreDetails) {
      onMoreDetails(product, () => {
        setWithInfo(false);
      });
    }

    setWithInfo(true);
  };

  const handleApplyButtonClick = e => {
    if (onApply) {
      onApply(product);
    }

    if (meta.confirm) {
      if (meta.confirm.title || meta.confirm.description) {
        e.preventDefault();
        setWithConfirmation(true);
      }
    }
  };

  return (
    <div className={classes.productWrapper}>
      <ProductHeadingRow
        logo={links.logo}
        brand={brand}
        highlighted={highlighted}
        title={title}
        labels={labels}
      />
      <Grid className={classes.productBody} container alignItems="center">
        <ProductColumns columns={columns} />
        <Grid className={classes.productActionsColumn} item xs={12} md={3}>
          <Grid container justify="center">
            {detailed.length > 0 && (
              <Button
                className={classes.productMoreInfoButton}
                variant="text"
                onClick={handleMoreInfoClick}
              >
                more details
              </Button>
            )}
            <ProductPrimaryButton
              className={classes.productApplyButton}
              size="large"
              href={links.apply}
              target="_blank"
              rel="noopener"
              onClick={handleApplyButtonClick}
            >
              {cta}
            </ProductPrimaryButton>
          </Grid>
        </Grid>
        {description && (
          <Hidden
            className={classes.productDescription}
            xsDown
            implementation="css"
          >
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </Hidden>
        )}
      </Grid>
      {featurePoint && (
        <Grid container>
          <ProductFeaturedPoint description={featurePoint} />
        </Grid>
      )}
      {detailed.length > 0 && (
        <ProductMoreInfo
          open={withInfo}
          onClose={() => setWithInfo(false)}
          title={title}
          links={links}
          brand={brand}
          description={description}
          detailed={detailed}
          disclaimer={disclaimer}
        />
      )}
      {meta.confirm && (
        <ProductConfirm
          open={withConfirmation}
          handleRequestClose={() => setWithConfirmation(false)}
          title={meta.confirm.heading}
          description={meta.confirm.description}
          forwardUrl={links.apply}
        />
      )}
    </div>
  );
};

export default ProductWrapper;
