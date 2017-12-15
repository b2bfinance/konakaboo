import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Row from '../Row';
import Col from '../Col';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText
} from 'material-ui/Dialog';

export const ConfirmButtonCol = Col.extend`
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
  <ConfirmDialog open={open} onRequestClose={handleRequestClose}>
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
