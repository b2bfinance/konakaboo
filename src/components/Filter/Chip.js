import styled, { css } from 'styled-components';
import Chip from '@material-ui/core/Chip';

export { Chip as BaseChip };

export const ChipHolder = styled.div`
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
  position: relative;
`;

export default styled(Chip)`
  ${props =>
    props.selection.length > 0 &&
    css`
      background-color: ${props.theme.filterChipChosenBackground} !important;
      color: ${props.theme.filterChipChosenColor} !important;
    `};
`;
