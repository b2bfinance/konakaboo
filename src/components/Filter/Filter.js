import React from 'react';
import { connect } from 'react-redux';
import { setChosenFiltersForGroup } from '../../actions/filter';
import styled, { css } from 'styled-components';
import { queries } from '../../utils/media';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import Radio from 'material-ui/Radio';
import Close from 'material-ui-icons/Close';

export const StyledFilter = styled.div`
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

export const FilterHeader = styled.div`
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

function getChosen(chosen, multi, value) {
  if (multi) {
    if (chosen.indexOf(value) === -1) {
      chosen.push(value);
      return chosen;
    }

    return chosen.filter(f => f !== value);
  }

  return value;
}

export const Filter = ({
  visible,
  group,
  multi,
  title,
  choices,
  chosen,
  handleClose,
  handleListItemClick
}) => (
  <StyledFilter visible={visible}>
    <FilterHeader>
      {title}
      <IconButton onClick={handleClose} aria-label="Close Filter Choices">
        <Close />
      </IconButton>
    </FilterHeader>
    <List>
      {choices.map(choice => (
        <ListItem
          key={choice.value}
          button
          onClick={() =>
            handleListItemClick(group, getChosen(chosen, multi, choice.value))
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
  </StyledFilter>
);

export const mapDispatchToProps = {
  handleListItemClick: setChosenFiltersForGroup
};

export const mapStateToProps = ({ filters }) => ({ filters });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
