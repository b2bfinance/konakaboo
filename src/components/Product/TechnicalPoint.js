import React from 'react';
import styled from 'styled-components';
import { queries } from '../../utils/media';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const Wrapper = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  ${queries.desktop`
    margin-bottom: .5rem;
    padding-left: 1rem;
  `};

  svg {
    fill: ${props => props.theme.infoCheckColor};
    margin-right: 0.5rem;
  }
`;

export default ({ points, theme }) =>
  points.map((point, i) => (
    <Wrapper key={i} theme={theme}>
      <CheckCircleIcon />
      {point}
    </Wrapper>
  ));
