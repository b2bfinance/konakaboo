import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Row from '../Row';
import Col from '../Col';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const ConfirmButtonCol = styled(Col)`
  margin: 1.5rem auto 0;
`;

export const ConfirmDialog = styled(Dialog)`
  text-align: center;
`;

const ProductConfirm = ({
  open,
  handleRequestClose,
  title,
  description,
  forwardUrl
}) => (
  <ConfirmDialog open={open} onClose={handleRequestClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
      <Row>
        <ConfirmButtonCol phone={80} tablet={60} desktop={40}>
          <Button primary href={forwardUrl}>
            Apply
          </Button>
        </ConfirmButtonCol>
      </Row>
    </DialogContent>
  </ConfirmDialog>
);

export default ProductConfirm;
