import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';
import ApplyButton from './ApplyButton';
import Confirm from './Confirm';
import FeaturedHighlightPointRow from './FeaturedHighlightPointRow';
import ProductGrid, { ProductMultiGrid } from './Grid';
import HeadingRow from './HeadingRow';
import MoreInfo from './MoreInfo';
import MoreInfoButton from './MoreInfoButton';

export const Wrapper = styled.div`
  margin-bottom: 56px;
  ${props =>
    props.faded &&
    css`
      opacity: 0.6;
    `};
`;

export const ProductBody = styled(Grid)`
  background-color: ${props => props.theme.productBackground};

  ${props =>
    props.standOut &&
    css`
      border-color: ${props.theme.productHighlightBorder};
    `};

  ${queries.desktop`
    border: 1px solid ${props => props.theme.productBorder};
  `}
`;

export const ProductDescription = styled(Typography)`
  border-top: 1px solid ${props => props.theme.productBorder};
  padding: 16px;
  width: 100%;
`;

export const Product = ({
  cta = 'Get Deal',
  highlighted,
  labels,
  title,
  links,
  brand,
  columns,
  description,
  feature_point,
  detailed,
  disclaimer,
  meta
}) => {
  const [withInfo, setWithInfo] = useState(false);
  const [withConfirmation, setWithConfirmation] = useState(false);

  return (
    <Wrapper faded={meta.faded}>
      <HeadingRow
        logo={links.logo}
        brand={brand}
        highlighted={highlighted}
        title={title}
        labels={labels}
      />
      <ProductBody container>
        <ProductMultiGrid columns={columns} />
        <ProductGrid phone={100} tablet={20}>
          <Grid container alignContent="center">
            <Grid item xs={12}>
              {detailed && (
                <MoreInfoButton
                  onClick={() => setWithInfo(!withInfo)}
                  component="button"
                >
                  more details
                </MoreInfoButton>
              )}
            </Grid>
            <Grid item xs={12}>
              <ApplyButton
                variant="extended"
                color="primary"
                size="medium"
                href={links.apply}
                target="_blank"
                rel="noopener"
                onClick={
                  meta.confirm
                    ? e => e.preventDefault() || setWithConfirmation(true)
                    : undefined
                }
              >
                {cta}
              </ApplyButton>
            </Grid>
          </Grid>
        </ProductGrid>
        <Hidden xsDown>
          {description && (
            <ProductDescription variant="body2">
              {description}
            </ProductDescription>
          )}
          {feature_point && (
            <FeaturedHighlightPointRow feature={feature_point} />
          )}
        </Hidden>
      </ProductBody>
      {detailed && (
        <MoreInfo
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
        <Confirm
          open={withConfirmation}
          handleRequestClose={() => setWithConfirmation(false)}
          title={meta.confirm.heading}
          description={meta.confirm.description}
          forwardUrl={links.apply}
        />
      )}
    </Wrapper>
  );
};

export default Product;
