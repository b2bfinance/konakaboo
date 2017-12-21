import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { getChosenForGroup } from '../../utils/filter';
import { resetFiltersForGroup } from '../../actions/filter';
import Chip from 'material-ui/Chip';
import Cancel from 'material-ui-icons/Cancel';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';
import Filter from './Filter';

export const ChipContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-right: 0.5rem;
  position: relative;
`;

export const StyledChip = styled(Chip)`
  ${props =>
    props.selection.length > 0 &&
    css`
      background-color: ${props.theme.filterChipChosenBackground} !important;
      color: ${props.theme.filterChipChosenColor} !important;
    `};
`;

export function generateChipLabel(title, multi, chosen, choices) {
  const firstChosen = multi ? chosen[0] : chosen;
  const firstSelection = choices.find(f => f.value === firstChosen);

  if (multi && chosen.length > 1) {
    return `${firstSelection.label} +${chosen.length - 1}`;
  }

  if (firstSelection) {
    return firstSelection.label;
  }

  return title;
}

export class FilterList extends Component {
  state = {
    activeFilterGroup: undefined
  };

  setActiveFilterGroup = group =>
    this.setState({
      activeFilterGroup:
        this.state.activeFilterGroup === group ? undefined : group
    });

  hasChosenForGroup = group =>
    `${getChosenForGroup(this.props.chosen, group)}`.length > 0;

  renderDeleteIcon = group =>
    this.hasChosenForGroup(group) ? <Cancel /> : <ArrowDropDown />;

  handleDeleteChosen(group, key) {
    if (this.hasChosenForGroup(group)) {
      if (this.state.activeFilterGroup === key) {
        this.setActiveFilterGroup(undefined);
      }

      return this.props.handleResetFiltersForGroup(group);
    }

    return this.setActiveFilterGroup(key);
  }

  render() {
    const { activeFilterGroup } = this.state;
    const { filters, chosen } = this.props;

    return filters.map(({ title, multiChoice, choices, key }, i) => (
      <ChipContainer key={key}>
        <StyledChip
          selection={getChosenForGroup(chosen, i)}
          label={generateChipLabel(
            title,
            multiChoice,
            getChosenForGroup(chosen, i),
            choices
          )}
          deleteIcon={this.renderDeleteIcon(i)}
          onClick={() => this.setActiveFilterGroup(key)}
          onDelete={() => this.handleDeleteChosen(i, key)}
        />
        <Filter
          visible={activeFilterGroup === key}
          group={i}
          multi={multiChoice}
          title={title}
          choices={choices}
          chosen={getChosenForGroup(chosen, i)}
          handleClose={() => this.setActiveFilterGroup(undefined)}
        />
      </ChipContainer>
    ));
  }
}

export const mapDispatchToProps = {
  handleResetFiltersForGroup: resetFiltersForGroup
};

export const mapStateToProps = ({ filters }) => ({
  chosen: filters.chosen,
  filters: filters.available
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
