import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Confirm from './Confirm';
import MoreInfo from './MoreInfo';
import HeadingRow from './HeadingRow';
import ProductGrid, { ProductMultiGrid } from './Grid';
import MoreInfoButton from './MoreInfoButton';
import ApplyButton from './ApplyButton';
import FeaturedHighlightPointRow from './FeaturedHighlightPointRow';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.div`
  margin-bottom: 56px;
`;

export const ProductBody = styled(Grid)`
  border: 2px solid ${props => props.theme.productBorder};
  background-color: ${props => props.theme.productBackground};

  ${props =>
    props.standOut &&
    css`
      border-color: ${props.theme.productHighlightBorder};
    `};
`;

export const ProductDescription = styled(Typography)`
  border-top: 2px solid ${props => props.theme.productBorder};
  padding: 24px 16px;
  width: 100%;
`;

export const Product = ({
  cta,
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
    <Wrapper>
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
        {description && (
          <ProductDescription variant="body2">{description}</ProductDescription>
        )}
        {feature_point && <FeaturedHighlightPointRow feature={feature_point} />}
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
