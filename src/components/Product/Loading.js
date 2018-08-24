import React from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';

export const Wrapper = styled.div`
  ${props =>
    props.loading &&
    css`
      opacity: 0.75;
    `};
`;

export const MaskItem = styled.div`
  background-color: ${props => props.theme.productMaskBackground};
  height: 35rem;
  margin-bottom: 1.5rem;

  ${queries.desktop`
    height: 9rem;
  `};
`;

export const Mask = ({ initiated, theme }) =>
  !initiated && (
    <React.Fragment>
      <MaskItem theme={theme} />
      <MaskItem theme={theme} />
      <MaskItem theme={theme} />
    </React.Fragment>
  );

export default ({ loading, children }) => (
  <Wrapper loading={loading}>{children}</Wrapper>
);
