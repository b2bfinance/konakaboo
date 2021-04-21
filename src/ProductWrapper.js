import { Button, Grid, Hidden, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import ProductColumns from "./ProductColumns";
import ProductConfirm from "./ProductConfirm";
import ProductFeaturedPoint from "./ProductFeaturedPoint";
import ProductHeadingRow from "./ProductHeadingRow";
import ProductMoreInfo from "./ProductMoreInfo";
import ProductPrimaryButton from "./ProductPrimaryButton";

const useStyles = makeStyles(
  (theme) => ({
    wrapper: {
      opacity: (props) => (props.faded ? 0.6 : 1),
      marginBottom: theme.spacing(8),
    },
    body: {
      backgroundColor: theme.tablo.productWrapper.bodyBackground,
      border: `1px solid ${theme.tablo.productWrapper.bodyBorder}`,
    },
    description: {
      width: "100%",
      borderTop: `1px solid ${theme.tablo.productWrapper.descriptionBorder}`,
      padding: theme.spacing(2),
    },
    actionsColumn: {
      padding: theme.spacing(2, 4),
    },
    moreInfoButton: {
      padding: theme.spacing(0, 1),
      display: "flex",
      justifySelf: "center",
      textTransform: "lowercase",
      color: theme.tablo.productWrapper.moreInfoColor,
    },
    applyButton: {
      marginTop: theme.spacing(0.5),
      width: "100%",
    },
  }),
  {
    name: "ProductWrapper",
  }
);

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
  onMoreDetails,
  onApply,
  cta,
  ribbonText,
}) => {
  const classes = useStyles({
    faded: meta.faded,
  });
  const [withInfo, setWithInfo] = useState(false);
  const [withConfirmation, setWithConfirmation] = useState(false);

  const handleMoreInfoClick = () => {
    if (typeof onMoreDetails === "function") {
      onMoreDetails(product);
    }

    setWithInfo(true);
  };

  const handleApplyButtonClick = (e) => {
    if (typeof onApply === "function") {
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
    <div className={classes.wrapper}>
      <ProductHeadingRow
        logo={links.logo}
        brand={brand}
        highlighted={highlighted}
        title={title}
        labels={labels}
        ribbonText={ribbonText}
      />
      <Grid className={classes.body} container alignItems="center">
        <ProductColumns columns={columns} />
        <Grid className={classes.actionsColumn} item xs={12} md={3}>
          <Grid container justify="center">
            {detailed.length > 0 && (
              <Button
                className={classes.moreInfoButton}
                variant="text"
                onClick={handleMoreInfoClick}
              >
                more details
              </Button>
            )}
            <ProductPrimaryButton
              className={classes.applyButton}
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
          <Hidden className={classes.description} xsDown implementation="css">
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
