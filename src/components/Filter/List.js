import Grid from '@material-ui/core/Grid';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Cancel from '@material-ui/icons/Cancel';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  resetFilters,
  resetGroupFilters,
  setFilters
} from '../../actions/filter';
import { generateChipLabel } from '../../utils/filter';
import Chip, { BaseChip, ChipHolder } from './Chip';
import Filter from './Filter';

export const Wrapper = styled(Grid)`
  justify-content: flex-end;
  margin-bottom: 32px;
`;

export default ({ filters, dispatch }) => {
  const [activeGroup, setActiveGroup] = useState();

  const handleDeleteChosen = (group, key) => {
    if (filters.chosen[group].length) {
      if (activeGroup === key) {
        setActiveGroup();
      }

      dispatch(resetGroupFilters(group));
      return;
    }

    setActiveGroup(key);
  };

  return (
    <Wrapper container>
      {filters.available.map((filter, i) => (
        <ChipHolder key={filter.key}>
          <Chip
            selection={filters.chosen[i]}
            label={generateChipLabel(
              filter.title,
              filter.multiChoice,
              filters.chosen[i],
              filter.choices
            )}
            deleteIcon={
              filters.chosen[i].length ? <Cancel /> : <ArrowDropDown />
            }
            onClick={() => setActiveGroup(filter.key)}
            onDelete={() => handleDeleteChosen(i, filter.key)}
            onBlur={() => setActiveGroup()}
          />
          <Filter
            visible={activeGroup === filter.key}
            group={i}
            multi={filter.multiChoice}
            title={filter.title}
            choices={filter.choices}
            chosen={filters.chosen[i]}
            handleSetChosenForGroup={(group, chosen) =>
              dispatch(setFilters(group, chosen))
            }
            handleClose={() => setActiveGroup()}
          />
        </ChipHolder>
      ))}
      <BaseChip
        label="Reset Filters"
        onClick={() => dispatch(resetFilters())}
      />
    </Wrapper>
  );
};
