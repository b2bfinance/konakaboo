import React from 'react';
import styled from 'styled-components';
import Label from '../Label';
import { queries } from '../../utils/media';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1;
  margin: 8px 0;

  ${queries.desktop`
    margin: 0;
  `}
`;

export default ({ labels }) => (
  <Wrapper>
    {labels.map((label, i) => (
      <Label key={i} label={label} />
    ))}
  </Wrapper>
);
