import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ApplyButton from './ApplyButton';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

export const Wrapper = styled(Grid)`
  border-top: 2px solid ${props => props.theme.productBorder};
  padding: 16px;
  margin-top: auto;
  min-height: 85px;
`;

export default ({ link, onClose }) => (
  <Wrapper container alignItems="center" justify="space-between">
    <Grid item xs={5} sm={7} lg={8}>
      <Button onClick={onClose} variant="text" size="small">
        <CloseIcon fontSize="small" /> close
      </Button>
    </Grid>
    <Grid item xs={7} sm={5} lg={4}>
      <ApplyButton variant="extended" color="primary" href={link}>
        Continue
      </ApplyButton>
    </Grid>
  </Wrapper>
);
