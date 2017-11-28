import styled from 'styled-components';

const Label = styled.div`
  background-color: ${props => props.theme.productLabelBackground};
  border: 1px solid ${props => props.theme.productLabelBorderColor};
  border-radius: 1rem;
  color: ${props => props.theme.productLabelColor};
  font-size: 80%;
  padding: 0.2rem 0.75rem;
`;

export default Label;
