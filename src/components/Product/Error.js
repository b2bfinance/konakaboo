import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #ff9800;
  color: #fff;
  padding: 1rem;
`;

export default ({ message }) => <Wrapper>{message}</Wrapper>;
