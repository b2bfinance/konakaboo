import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export default styled(Fab)`
  background-color: ${props => props.theme.applyButtonBackground} !important;
  width: 100% !important;
  box-shadow: none !important;
`;
