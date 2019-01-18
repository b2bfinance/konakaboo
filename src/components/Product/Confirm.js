import React from 'react';
import styled from 'styled-components';
import ApplyButton from './ApplyButton';
import Col from '../Col';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const Wrapper = styled(Dialog)`
  text-align: center;
`;

export const ConfirmButtonCol = styled(Col)`
  margin: 1.5rem auto 0;
`;

export default ({
  open,
  handleRequestClose,
  title,
  description,
  forwardUrl
}) => (
  <Wrapper open={open} onClose={handleRequestClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
      <Grid>
        <ConfirmButtonCol phone={80} tablet={60} desktop={40}>
          <ApplyButton variant="extended" color="primary" href={forwardUrl}>
            Confirm
          </ApplyButton>
        </ConfirmButtonCol>
      </Grid>
    </DialogContent>
  </Wrapper>
);
