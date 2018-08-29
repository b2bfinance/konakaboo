import React from 'react';
import styled, { css } from 'styled-components';
import Row from '../Row';
import Labels from './Labels';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

export const Wrapper = styled(Row)`
  align-items: center;
  background-color: ${props => props.theme.productOutlineBackground};
  padding: 0.5rem 0.75rem;

  ${props =>
    props.highlight &&
    css`
      background-color: ${props.theme.productHighlightOutlineBackground};
      color: ${props.theme.productHighlightOutlineColor};

      svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-right: 0.25rem;
      }
    `};
`;

export default ({ highlight, title, labels }) => (
  <Wrapper highlight={highlight}>
    {highlight && <LocalOfferIcon />}
    {title}
    <Labels labels={labels} />
  </Wrapper>
);
