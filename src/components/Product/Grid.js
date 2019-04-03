import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Col from '../Col';
import { queries } from '../../utils/media';

export const Wrapper = styled(Col)`
  border-top: 2px solid ${props => props.theme.productBorder};
  padding: 16px 8px;
  text-align: center;

  ${queries.tablet`
    margin-top: 16px;
    margin-bottom: 16px;
    padding: 8px;
    border-top: 0;
    border-left: 2px solid ${props => props.theme.productBorder};
  `};

  &:first-child {
    border-top: 0;
    border-left: 0;
  }
`;

export const ProductMultiGrid = ({ columns, theme }) =>
  columns.map((column, i) => (
    <Wrapper
      key={i}
      background={(i + 1) % 2}
      theme={theme}
      item
      phone={100}
      tablet={80 / columns.length}
    >
      <Typography variant="subtitle2" component="span">
        {column.label}
      </Typography>
      <Typography variant="h5" component="span" color="textSecondary">
        {column.value}
      </Typography>
      {column.subtext && (
        <Typography variant="caption">{column.subtext}</Typography>
      )}
    </Wrapper>
  ));

export default Wrapper;
