import styled, { css } from 'styled-components';
import Button from '../Button';

export default styled(Button)`
  ${props =>
    props.margin &&
    css`
      margin-bottom: 0.5rem;
    `};
`;
