import React from 'react';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';
import { getChosenWithModification } from '../../utils/filter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Close from '@material-ui/icons/Close';
import Header from './Header';
import { Typography } from '@material-ui/core';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 15px 12px rgba(0, 0, 0, 0.22), 0 0 38px rgba(0, 0, 0, 0.3);
  margin-top: 0.3rem;
  min-width: 100%;
  opacity: 0;
  right: 0;
  transform-origin: right top 0;
  transform: scale3d(0.8, 0.8, 1);
  transition: opacity 250ms cubic-bezier(0.8, 0, 0.6, 1) 0ms,
    transform 250ms cubic-bezier(0.8, 0, 0.6, 1) 0ms, visibility 250ms;
  visibility: hidden;
  z-index: 150;

  ${props =>
    props.visible &&
    css`
      opacity: 1;
      transform: scale3d(1, 1, 1);
      visibility: visible;
    `};

  ${queries.phone`
    bottom: 0;
    position: fixed;
  `};

  ${queries.tablet`
    bottom: auto;
    position: absolute;
  `};

  ul {
    max-height: 25.5rem;
    overflow: auto;
  }
`;

export const Heading = styled(Typography)`
  color: ${props => props.theme.filterHeaderColor} !important;
`;

export function handleMouseDown(e) {
  e.preventDefault();
}

export default ({
  visible,
  group,
  multi,
  title,
  choices,
  chosen,
  handleSetChosenForGroup,
  handleClose
}) => (
  <Wrapper visible={visible} onMouseDown={handleMouseDown}>
    <Header>
      <Heading variant="subheading">{title}</Heading>
      <IconButton onClick={handleClose} aria-label="Close Filter Choices">
        <Close />
      </IconButton>
    </Header>
    <List>
      {choices.map(choice => (
        <ListItem
          key={choice.value}
          button
          onClick={() =>
            handleSetChosenForGroup(
              group,
              getChosenWithModification(chosen, multi, choice.value)
            )
          }
        >
          {multi ? (
            <Checkbox
              checked={chosen.indexOf(choice.value) !== -1}
              tabIndex={-1}
              disableRipple
            />
          ) : (
            <Radio
              checked={chosen === choice.value}
              tabIndex={-1}
              disableRipple
            />
          )}
          <ListItemText primary={choice.label} />
        </ListItem>
      ))}
    </List>
  </Wrapper>
);
