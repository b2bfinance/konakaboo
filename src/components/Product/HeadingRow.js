import React from 'react';
import styled from 'styled-components';
import WhatsHotICon from '@material-ui/icons/Whatshot';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Labels from './Labels';
import { queries } from '../../utils/media';

export const HighlightedIcon = styled(WhatsHotICon)`
  margin-left: 0.25rem;
  color: ${props => props.theme.productHighlightColor};
`;

export const ProductLogoContainer = styled.div`
  ${queries.desktop`
    background-color: white;
    display: flex;
    padding: 4px;
    margin-right: 16px;
    margin-left: 12px;
    border: 2px solid ${props => props.theme.productBorder};
    margin-bottom: -8px;
    text-align: center;
    height: 85px;
  `};
`;

export const ProductLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const ProductHeading = styled(Typography)`
  color: ${props => props.theme.productHeadingColor};
`;

export const ProductLabels = styled(Grid)`
  ${queries.desktop`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `};
`;

export default ({ logo, brand, highlighted, title, labels }) => (
  <Grid container>
    <Grid item xs={12} md={2}>
      <ProductLogoContainer>
        <ProductLogo src={logo} alt={brand} />
      </ProductLogoContainer>
    </Grid>
    <Grid item xs={12} md={7}>
      <Typography color="textPrimary" component={Grid} container>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Grid item>
              <ProductHeading variant="h5" component="p">
                {brand}
              </ProductHeading>
            </Grid>
            <Grid item>{highlighted && <HighlightedIcon />}</Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ProductHeading>{title}</ProductHeading>
        </Grid>
      </Typography>
    </Grid>
    {labels && labels.length > 0 && (
      <ProductLabels item xs={12} md={3}>
        <Labels labels={labels} />
      </ProductLabels>
    )}
  </Grid>
);
