import styled, { css } from 'styled-components';

const Button = styled.a`
  align-items: center;
  border-radius: .15rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: ${props => props.theme.mainBoldFontWeight};
  justify-content: center;
  padding: .75rem 1.5rem;
  width: 100%;
  white-space: nowrap;
  user-select: none;

  ${props => props.primary && css`
    background-color: ${props.theme.applyButtonBackground};
    color: ${props.theme.applyButtonColor};
  `}

  ${props => props.secondary && css`
    background-color: ${props.theme.infoButtonBackground};
    color: ${props.theme.infoButtonColor};
  `}

  ${props => props.slim && css`
    padding: .25rem .5rem;
    font-size: 90%;
  `}
`

export default Button;
