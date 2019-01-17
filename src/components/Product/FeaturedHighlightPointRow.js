import React from 'react';
import styled, { css } from 'styled-components';
import GradeOutline from '@material-ui/icons/GradeOutlined';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.productOutlineBackground}
  border-top: 2px solid ${props => props.theme.productBorder};
  padding: 8px 16px;

  ${props =>
    props.standOut &&
    css`
      border-color: ${props.theme.productHighlightOutlineBackground};
    `};
`;

export const HighlightIcon = styled.span`
  color: ${props => props.theme.productFeaturedIconColor};
  font-size: 1.25rem;
`;

export const Feature = styled.span`
  margin-left: 0.35rem;
  opacity: 0.85;
  font-size: 85%;
`;

export default ({ standOut, feature }) => (
  <Wrapper standOut={standOut}>
    <HighlightIcon>
      <GradeOutline fontSize="inherit" />
    </HighlightIcon>
    <Feature>{feature}</Feature>
  </Wrapper>
);
