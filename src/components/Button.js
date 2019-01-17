import React from 'react';
import styled, { css } from 'styled-components';
import { default as MaterialButton } from '@material-ui/core/Button';

export const Button = ({ ...props }) => <MaterialButton {...props} />;

export default styled(Button)`
  font-family: ${props => props.theme.mainFontFamily};
  font-weight: ${props => props.theme.mainBoldFontWeight};

  &:hover {
    text-decoration: none;
  }
`;
