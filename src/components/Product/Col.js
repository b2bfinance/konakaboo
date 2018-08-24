import React from 'react';
import styled from 'styled-components';
import Col from '../Col';

export const Wrapper = styled(Col)`
  align-items: center;
  background-color: ${props =>
    props.background ? props.theme.productColBackground : ''};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.25rem;
  text-align: center;

  img {
    flex-shrink: 0;
    max-width: 100%;
    max-height: 120px;
  }

  span {
    font-size: 1.25rem;
    font-weight: ${props => props.theme.mainBoldFontWeight};
    margin-bottom: 0.5rem;
    line-height: 1.1;
  }

  small {
    font-size: 95%;
    font-weight: ${props => props.theme.mainNormalFontWeight};
  }
`;

export const MultiCol = ({ columns, theme }) =>
  columns.map((column, i) => (
    <Wrapper
      key={i}
      phone="100"
      desktop={60 / columns.length}
      background={(i + 1) % 2}
      theme={theme}
    >
      <small>{column.label}</small>
      <span>{column.value}</span>
    </Wrapper>
  ));

export default Wrapper;
