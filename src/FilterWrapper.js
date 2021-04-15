import {
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Typography,
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { FILTERS_TOGGLE } from "./utils/actions";

const useStyles = makeStyles(
  (theme) => ({
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
  }),
  {
    name: "FilterWrapper",
  }
);

const isSelected = (filter, choice) =>
  filter.selected.indexOf(choice.value) !== -1;

export const FilterWrapper = ({ filter, onClose, dispatch }) => {
  const classes = useStyles();

  const handleSetChosen = (choice) => () => {
    dispatch({
      type: FILTERS_TOGGLE,
      filter,
      choice,
    });
  };

  return (
    <React.Fragment>
      <Grid
        className={classes.header}
        container
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Typography className={classes.headerTitle} variant="subtitle1">
            {filter.title}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton
            color="inherit"
            size="small"
            onClick={onClose}
            aria-label={`Close ${filter.title} filter`}
          >
            <Close />
          </IconButton>
        </Grid>
      </Grid>
      <List>
        {filter.choices.map((choice) => (
          <ListItem key={choice.value} button onClick={handleSetChosen(choice)}>
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
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default FilterWrapper;
