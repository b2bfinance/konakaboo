import styled, { css } from 'styled-components';

const Button = styled.a`
  align-items: center;
  border-radius: .15rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: .75rem 1.5rem;
  width: 100%;
  white-space: nowrap;
  user-select: none;

  ${props => props.primary && css`
    background-color: ${props.theme.green};
    color: white;
  `}

  ${props => props.secondary && css`
    background-color: ${props.theme.gray50};
  `}

  ${props => props.slim && css`
    padding: .25rem .5rem;
  `}
`

export default Button;
