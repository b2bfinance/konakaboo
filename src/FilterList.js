import { Chip, Grid, Popover } from "@material-ui/core";
import Cancel from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/styles";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import FilterWrapper from "./FilterWrapper";
import { FILTERS_GROUP_RESET, FILTERS_RESET } from "./utils/actions";
import filterReducer from "./utils/filterReducer";

const useStyles = makeStyles(theme => ({
  filterListWrapper: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing(4),
  },
  filterListChip: {
    marginRight: theme.spacing(1),
  },
}));

const hasSelected = selected => selected.length > 0;

const generateChipLabel = filter => {
  if (hasSelected(filter.selected)) {
    return `${filter.title} +${filter.selected.length}`;
  }

  return filter.title;
};

const FilterList = ({ filters, onFilter }) => {
  const [filterState, dispatch] = useReducer(filterReducer, filters);
  const classes = useStyles();
  const [activeGroup, setActiveGroup] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const firstRender = useRef(true);
  const filterChangeHandler = useCallback(() => onFilter(filterState), [
    filterState,
  ]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    filterChangeHandler();
  }, [filterChangeHandler]);

  const handleChipClick = group => e => {
    setAnchorEl(e.currentTarget);
    setActiveGroup(group);
  };

  const handleChipDelete = filter => () => {
    dispatch({
      type: FILTERS_GROUP_RESET,
      filter,
    });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setActiveGroup(null);
  };

  const handleResetAllFilters = () => {
    dispatch({
      type: FILTERS_RESET,
    });
  };

  if (filterState.length === 0) {
    return null;
  }

  return (
    <Grid className={classes.filterListWrapper} container>
      {filterState.map((filter, i) => (
        <React.Fragment key={i}>
          <Chip
            className={classes.filterListChip}
            label={generateChipLabel(filter)}
            deleteIcon={<Cancel />}
            onClick={handleChipClick(filter.key)}
            onDelete={
              hasSelected(filter.selected) ? handleChipDelete(filter) : null
            }
            color={hasSelected(filter.selected) ? "secondary" : "default"}
          />
          <Popover
            open={Boolean(anchorEl) && activeGroup === filter.key}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
          >
            <FilterWrapper
              filter={filter}
              onClose={handlePopoverClose}
              dispatch={dispatch}
            />
          </Popover>
        </React.Fragment>
      ))}
      <Chip label="Reset Filters" onClick={handleResetAllFilters} />
    </Grid>
  );
};

export default FilterList;
