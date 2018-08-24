import styled from 'styled-components';

export default styled.div`
  align-items: center;
  background-color: ${props => props.theme.filterHeaderBackground};
  color: ${props => props.theme.filterHeaderColor};
  display: flex;
  font-weight: ${props => props.theme.mainBoldFontWeight};
  justify-content: space-between;
  min-width: 15rem;
  padding: 0.45rem 0.5rem 0.45rem 0.75rem;

  svg {
    fill: ${props => props.theme.filterHeaderColor};
  }
`;
