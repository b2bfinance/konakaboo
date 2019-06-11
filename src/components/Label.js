import {
  blue,
  blueGrey,
  orange,
  red,
  teal,
  yellow
} from '@material-ui/core/colors';
import { getContrastRatio } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';

export const colors = {
  blue,
  blueGrey,
  red,
  orange,
  yellow,
  teal
};

export const Label = styled.div`
  border-radius: 1rem;
  padding: 0.2rem 0.75rem;
  background-color: ${props => props.colorGroup[600]};
  color: ${props =>
    getContrastRatio(props.colorGroup[600], props.colorGroup[50]) >= 3
      ? props.colorGroup[50]
      : colors.blueGrey[800]};
`;

export const getLabel = label => {
  if (label.startsWith('#')) {
    const firstSpaceIndex = label.indexOf(' ');
    return [label.slice(1, firstSpaceIndex), label.slice(firstSpaceIndex + 1)];
  }

  return ['blueGrey', label];
};

export default ({ label }) => {
  const [color, text] = getLabel(label);

  return (
    <Label colorGroup={colors[color] || colors.blueGrey}>
      <Typography color="inherit" variant="caption">
        {text}
      </Typography>
    </Label>
  );
};
