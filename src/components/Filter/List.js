import React, { Component } from 'react';
import styled from 'styled-components';
import Cancel from '@material-ui/icons/Cancel';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Grid from '@material-ui/core/Grid';
import { getChosenForGroup, generateChipLabel } from '../../utils/filter';
import Filter from './Filter';
import Chip, { BaseChip, ChipHolder } from './Chip';

export const Wrapper = styled(Grid)`
  justify-content: flex-end;
`;

export default class List extends Component {
  state = {
    activeFilterGroup: undefined
  };

  setActiveFilterGroup = group =>
    this.setState({
      activeFilterGroup:
        this.state.activeFilterGroup === group ? undefined : group
    });

  hasChosenForGroup = group =>
    `${getChosenForGroup(this.props.filtersChosen, group)}`.length > 0;

  renderDeleteIcon = group =>
    this.hasChosenForGroup(group) ? <Cancel /> : <ArrowDropDown />;

  handleDeleteChosen(group, key) {
    if (this.hasChosenForGroup(group)) {
      if (this.state.activeFilterGroup === key) {
        this.setActiveFilterGroup(undefined);
      }

      this.props.handleResetFiltersForGroup(group);

      return;
    }

    this.setActiveFilterGroup(key);
  }

  render() {
    const { activeFilterGroup } = this.state;

    const {
      filtersChosen,
      filtersAvailable,
      handleResetFilters,
      handleSetChosenForGroup
    } = this.props;

    return (
      <Wrapper container>
        {filtersAvailable.map((filter, i) => (
          <ChipHolder key={filter.key}>
            <Chip
              selection={getChosenForGroup(filtersChosen, i)}
              label={generateChipLabel(
                filter.title,
                filter.multiChoice,
                getChosenForGroup(filtersChosen, i),
                filter.choices
              )}
              deleteIcon={this.renderDeleteIcon(i)}
              onClick={() => this.setActiveFilterGroup(filter.key)}
              onDelete={() => this.handleDeleteChosen(i, filter.key)}
              onBlur={() => this.setActiveFilterGroup(undefined)}
            />
            <Filter
              visible={activeFilterGroup === filter.key}
              group={i}
              multi={filter.multiChoice}
              title={filter.title}
              choices={filter.choices}
              chosen={getChosenForGroup(filtersChosen, i)}
              handleSetChosenForGroup={handleSetChosenForGroup}
              handleClose={() => this.setActiveFilterGroup(undefined)}
            />
          </ChipHolder>
        ))}
        <BaseChip label="Reset Filters" onClick={handleResetFilters} />
      </Wrapper>
    );
  }
}
