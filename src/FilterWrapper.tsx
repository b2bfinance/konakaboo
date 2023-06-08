import Close from "@mui/icons-material/Close";
import {
  Box,
  Checkbox,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import { ProductFilter, ProductFilterChoice } from "./ProductTypes";
import { FILTERS_TOGGLE } from "./utils/filterReducer";

const useStyles = makeStyles({
  name: "TabloFilterWrapper",
})((theme) => ({
  root: {},
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  headerTitle: {
    marginRight: theme.spacing(2),
  },
  listIcon: {
    minWidth: theme.spacing(5),
  },
}));

const isSelected = (filter: ProductFilter, choice: ProductFilterChoice) =>
  filter.selected.indexOf(choice.value) !== -1;

export type FilterWrapperProps = {
  filter: ProductFilter;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  dispatch: React.Dispatch<{
    type: typeof FILTERS_TOGGLE;
    filter: ProductFilter;
    choice: ProductFilterChoice;
  }>;
};

export const FilterWrapper: React.FC<FilterWrapperProps> = ({
  filter,
  onClose,
  dispatch,
}) => {
  const { classes } = useStyles();

  const handleSetChosen = (choice: ProductFilterChoice) => () => {
    dispatch({
      type: FILTERS_TOGGLE,
      filter,
      choice,
    });
  };

  return (
    <Box className={classes.root}>
      <Stack
        className={classes.header}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography className={classes.headerTitle} variant="subtitle1">
          {filter.title}
        </Typography>
        <IconButton
          color="inherit"
          size="small"
          onClick={onClose}
          aria-label={`Close ${filter.title} filter`}
        >
          <Close />
        </IconButton>
      </Stack>
      <List>
        {filter.choices.map((choice) => (
          <ListItemButton key={choice.value} onClick={handleSetChosen(choice)}>
            <ListItemIcon className={classes.listIcon}>
              {filter.multiChoice ? (
                <Checkbox
                  edge="start"
                  checked={isSelected(filter, choice)}
                  tabIndex={-1}
                  disableRipple
                />
              ) : (
                <Radio
                  edge="start"
                  checked={isSelected(filter, choice)}
                  tabIndex={-1}
                  disableRipple
                />
              )}
            </ListItemIcon>
            <ListItemText primary={choice.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default FilterWrapper;
