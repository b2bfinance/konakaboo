import React from 'react';
import styled from 'styled-components';
import GradeOutline from '@material-ui/icons/GradeOutlined';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export const Wrapper = styled(Grid)`
  background-color: ${props => props.theme.productBorder};
  border-top: 2px solid ${props => props.theme.productBorder};
  padding: 8px 16px;
`;

export const HighlightIcon = styled.span`
  color: ${props => props.theme.productFeaturedIconColor};
  font-size: 1.25rem;
`;

export const Feature = styled.span`
  margin-left: 4px;
`;

export default ({ feature }) => (
  <Wrapper container alignItems="center">
    <Grid item>
      <HighlightIcon>
        <GradeOutline fontSize="inherit" />
      </HighlightIcon>
    </Grid>
    <Grid item>
      <Typography variant="subtitle1">
        <Feature>{feature}</Feature>
      </Typography>
    </Grid>
  </Wrapper>
);
