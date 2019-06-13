import React from 'react';
import styled from 'styled-components';
import Label from '../Label';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default ({ labels }) => (
  <Wrapper>
    {labels.map((label, i) => (
      <Label key={i} label={label} />
    ))}
  </Wrapper>
);
