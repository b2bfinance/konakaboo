import { Chip, Grid, Popover } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import Cancel from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { RESET_FILTERS, RESET_GROUP_FILTERS } from "./constants";
import FilterWrapper from "./FilterWrapper";
import { useFilterDispatch, useFilterState } from "./hooks";
import { generateChipLabel } from "./utils";

const useStyles = makeStyles(theme => ({
  filterListWrapper: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4)
  },
  filterListChip: {
    marginRight: theme.spacing(1)
  }
}));

const FilterList = () => {
  const classes = useStyles();
  const [activeGroup, setActiveGroup] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const filters = useFilterState();
  const dispatchFilters = useFilterDispatch();

  const handleChipClick = group => e => {
    setAnchorEl(e.currentTarget);
    setActiveGroup(group);
  };

  const handleChipDelete = group => () => {
    dispatchFilters({
      type: RESET_GROUP_FILTERS,
      group
    });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveGroup(null);
  };

  const handleResetAllFilters = () => {
    dispatchFilters({
      type: RESET_FILTERS
    });
  };

  return (
    <Grid className={classes.filterListWrapper} container>
      {filters.available.map((filter, i) => (
        <React.Fragment key={i}>
          <Chip
            className={classes.filterListChip}
            selection={filters.chosen[i]}
            label={generateChipLabel(filter.title, filter.multiChoice, filters.chosen[i], filter.choices)}
            deleteIcon={filters.chosen[i].length > 0 ? <Cancel /> : <ArrowDropDown />}
            onClick={handleChipClick(filter.key)}
            onDelete={handleChipDelete(i)}
            color={filters.chosen[i].length > 0 ? "secondary" : "default"}
          />
          <Popover
            open={Boolean(anchorEl) && activeGroup === filter.key}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
          >
            <FilterWrapper
              group={i}
              multi={filter.multiChoice}
              title={filter.title}
              choices={filter.choices}
              chosen={filters.chosen[i]}
              onClose={handlePopoverClose}
            />
          </Popover>
        </React.Fragment>
      ))}
      <Chip label="Reset Filters" onClick={handleResetAllFilters} />
    </Grid>
  );
};

export default FilterList;
