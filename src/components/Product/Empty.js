import React from 'react';
import styled from 'styled-components';
import Col from '../Col';
import Row from '../Row';

export const Wrapper = styled(Col)`
  background-color: ${props => props.theme.productEmptyBackground};
  margin: 2rem auto;
  padding: 2rem;
`;

export default () => (
  <Row>
    <Wrapper phone="100" desktop="35">
      <p>There are no product matching your requirements.</p>
    </Wrapper>
  </Row>
);
