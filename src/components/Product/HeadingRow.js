import React from 'react';
import styled from 'styled-components';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Labels from './Labels';
import { queries } from '../../utils/media';

export const Wrapper = styled(Grid)`
  align-items: center;
  padding: 16px;
`;

export const StandOutIcon = styled(LocalOfferIcon)`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.25rem;
`;

export const ProductLogoContainer = styled.div`
  background-color: white;
  margin-right: 16px;

  ${queries.desktop`
    border: 2px solid ${props => props.theme.productOutlineBackground};
    margin-bottom: -32px;
    padding: 8px;
    text-align: center;
  `};
`;

export const ProductLogo = styled.img`
  max-width: 100%;
  max-height: 125px;

  ${queries.desktop`
    max-height: 75px;
  `};
`;

export const ProductLabels = styled(Grid)`
  float: right;
`;

export default ({ logo, brand, standOut, title, labels }) => (
  <Wrapper container>
    <Grid item xs={12} md={2}>
      <ProductLogoContainer>
        <ProductLogo src={logo} alt={brand} />
      </ProductLogoContainer>
    </Grid>
    <Grid item xs={12} md={7}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="headline">{brand}</Typography>
        </Grid>
        <Grid item xs={12}>
          {standOut && <StandOutIcon />}
          {title}
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} md={3}>
      {labels && labels.length > 0 && (
        <ProductLabels>
          <Labels labels={labels} />
        </ProductLabels>
      )}
    </Grid>
  </Wrapper>
);
