import { Chip, Grid, Popover } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import FilterWrapper from "./FilterWrapper";
import { useEmbedDispatch, useEmbedState } from "./hooks";
import { FILTERS_GROUP_RESET, FILTERS_RESET, generateChipLabel } from "./utils";

const useStyles = makeStyles(theme => ({
  filterListWrapper: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4),
  },
  filterListChip: {
    marginRight: theme.spacing(1),
  },
}));

const FilterList = () => {
  const classes = useStyles();
  const [activeGroup, setActiveGroup] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const { chosenFilters, availableFilters } = useEmbedState();
  const dispatchAction = useEmbedDispatch();

  const handleChipClick = group => e => {
    setAnchorEl(e.currentTarget);
    setActiveGroup(group);
  };

  const handleChipDelete = group => () => {
    dispatchAction({
      type: FILTERS_GROUP_RESET,
      group,
    });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveGroup(null);
  };

  const handleResetAllFilters = () => {
    dispatchAction({
      type: FILTERS_RESET,
    });
  };

  if (availableFilters.length === 0) {
    return null;
  }

  return (
    <Grid className={classes.filterListWrapper} container>
      {availableFilters.map((filter, i) => (
        <React.Fragment key={i}>
          <Chip
            className={classes.filterListChip}
            selection={chosenFilters[i]}
            label={generateChipLabel(
              filter.title,
              filter.multiChoice,
              chosenFilters[i],
              filter.choices
            )}
            deleteIcon={<Cancel />}
            onClick={handleChipClick(filter.key)}
            onDelete={chosenFilters[i].length > 0 ? handleChipDelete(i) : null}
            color={chosenFilters[i].length > 0 ? "secondary" : "default"}
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
              chosen={chosenFilters[i]}
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
