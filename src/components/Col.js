import { queries } from '../utils/media';
import styled from 'styled-components';

const width = (query, width) => {
  if (!width) {
    return;
  }

  return queries[query]`
    flex: 0 0 ${width}%;
    max-width: ${width}%;
  `;
};

const Col = styled.div`
  width: 100%;
  min-height: 1px;

  ${props => width('phone', props.phone)};
  ${props => width('tablet', props.tablet)};
  ${props => width('desktop', props.desktop)};
`;

export default Col;
