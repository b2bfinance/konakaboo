import React from 'react';
import styled from 'styled-components';
import { queries } from '../../utils/media';

export const Wrapper = styled.li`
  font-size: 1.5rem;
  font-weight: ${props => props.theme.mainBoldFontWeight};

  ${queries.desktop`
    padding-right: 1rem;
  `};
`;

export default ({ points, theme }) =>
  points.map((point, i) => (
    <Wrapper key={i} theme={theme}>
      {point}
    </Wrapper>
  ));
