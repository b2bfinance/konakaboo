import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const Wrapper = styled.div`
  padding: 16px;
  border-bottom: 2px solid ${props => props.theme.productBorder};
`;

export const LogoWrapper = styled.div`
  border: 2px solid ${props => props.theme.productBorder};
  display: flex;
  height: 100px;
  width: 150px;
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export default ({ title, brand, logo, onClose }) => (
  <Wrapper>
    <Grid container spacing={4}>
      <Hidden xsDown>
        <Grid item sm={3} md={3} xl={2}>
          <LogoWrapper>
            <Logo src={logo} alt={brand} />
          </LogoWrapper>
        </Grid>
      </Hidden>
      <Grid item sm={9} md={9} xl={10} mt={1}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">{brand}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{title}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <CloseButton>
      <IconButton aria-label="Close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </CloseButton>
  </Wrapper>
);
