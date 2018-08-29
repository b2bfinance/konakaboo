import React from 'react';
import styled, { css } from 'styled-components';
import Row from '../Row';
import Col from '../Col';
import GradeOutline from '@material-ui/icons/GradeOutlined';

export const Wrapper = styled(Row)`
  align-items: center;
  border-top: 2px solid ${props => props.theme.productOutlineBackground};
  padding: 0.35rem 0.75rem;

  ${props =>
    props.highlight &&
    css`
      border-color: ${props.theme.productHighlightOutlineBackground};
    `};
`;

export const HighlightIcon = styled.div`
  color: ${props => props.theme.productFeaturedIconColor};
  font-size: 1.25rem;
`;

export const Feature = styled.div`
  margin-left: 0.35rem;
  opacity: 0.85;
  font-size: 85%;
`;

export default ({ highlight, feature }) => (
  <Wrapper highlight={highlight}>
    <Col>
      <HighlightIcon>
        <GradeOutline fontSize="inherit" />
      </HighlightIcon>
    </Col>
    <Col>
      <Feature>{feature}</Feature>
    </Col>
  </Wrapper>
);
