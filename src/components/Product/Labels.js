import React from 'react';
import styled from 'styled-components';
import { queries } from '../../utils/media';
import Label from '../Label';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:last-child {
    div {
      margin-right: 0;
    }
  }

  ${queries.phone`
    div {
      margin: .5rem .5rem 0 0;
    }
  `};

  ${queries.tablet`
    margin-left: auto;

    div {
      margin: 0 .5rem 0 0;
    }
  `};
`;

export default ({ labels }) => (
  <Wrapper>
    {labels.map((label, i) => (
      <Label key={i} label={label} />
    ))}
  </Wrapper>
);
