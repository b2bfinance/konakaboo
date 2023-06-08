import Cancel from "@mui/icons-material/Cancel";
import { Chip, Grid, Popover } from "@mui/material";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { makeStyles } from "tss-react/mui";
import FilterWrapper from "./FilterWrapper";
import {
  FILTERS_GROUP_RESET,
  FILTERS_RESET,
  filterReducer,
} from "./utils/filterReducer";
import { ProductFilter } from "./ProductTypes";

const useStyles = makeStyles({
  name: "TabloFilterList",
})((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
      flexDirection: "row",
    },
  },
  chip: {
    margin: theme.spacing(0, 1, 1),
  },
}));

const hasSelected = (selected: ProductFilter["selected"]) =>
  selected.length > 0;

const generateChipLabel = (filter: ProductFilter) => {
  if (hasSelected(filter.selected)) {
    return `${filter.title} +${filter.selected.length}`;
  }

  return filter.title;
};

export type FilterListProps = {
  filters: ProductFilter[];
  onFilter?: (filters: ProductFilter[]) => void;
};

export const FilterList: React.FC<FilterListProps> = ({
  filters,
  onFilter,
}) => {
  const [filterState, dispatch] = useReducer(filterReducer, filters);
  const { classes } = useStyles();
  const [activeGroup, setActiveGroup] = useState<null | string>(null);
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const firstRender = useRef(true);

  const filterChangeHandler = useCallback(() => {
    if (typeof onFilter === "function") {
      onFilter(filterState);
    }
  }, [filterState]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    filterChangeHandler();
  }, [filterChangeHandler]);

  const handleChipClick = (group: string) => (e: React.SyntheticEvent) => {
    setAnchorEl(e.currentTarget);
    setActiveGroup(group);
  };

  const handleChipDelete = (filter: ProductFilter) => () => {
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
    <Grid className={classes.root} container>
      {filterState.map((filter, i) => (
        <React.Fragment key={i}>
          <Chip
            className={classes.chip}
            label={generateChipLabel(filter)}
            deleteIcon={<Cancel />}
            onClick={handleChipClick(filter.key)}
            onDelete={
              hasSelected(filter.selected)
                ? handleChipDelete(filter)
                : undefined
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
      <Chip
        className={classes.chip}
        label="Reset Filters"
        onClick={handleResetAllFilters}
      />
    </Grid>
  );
};
