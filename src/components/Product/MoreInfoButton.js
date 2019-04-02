import styled from 'styled-components';
import Link from '@material-ui/core/Link';

export default styled(Link)`
  margin-bottom: 8px !important;
  color: ${props => props.theme.infoButtonColor} !important;
`;
