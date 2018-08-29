import React from 'react';
import styled, { css } from 'styled-components';
import Col from '../Col';
import Row from '../Row';
import InfoList from './InfoList';
import HighlightPoint from './HighlightPoint';
import TechnicalPoint from './TechnicalPoint';

export const Wrapper = styled(Row)`
  padding: 1rem;

  ${props =>
    !props.visible &&
    css`
      display: none;
    `};
`;

export default ({ visible, description, highlights, technical, theme }) => (
  <Wrapper visible={visible} theme={theme}>
    <span>{description}</span>
    <Row>
      <Col phone="100" desktop="50">
        <InfoList>
          <HighlightPoint points={highlights} />
        </InfoList>
      </Col>
      <Col phone="100" desktop="50">
        <InfoList>
          <TechnicalPoint points={technical} />
        </InfoList>
      </Col>
    </Row>
  </Wrapper>
);
