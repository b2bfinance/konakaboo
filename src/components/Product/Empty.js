import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.productEmptyBackground};
  margin: 2rem auto;
  padding: 2rem;
`;

export default () => (
  <Wrapper>
    <p>There are no product matching your requirements.</p>
  </Wrapper>
);
