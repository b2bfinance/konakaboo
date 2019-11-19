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

const useStyles = makeStyles(theme => ({
  filterWrapperHeader: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  filterWrapperHeaderTitle: {
    marginRight: theme.spacing(2),
  },
  filterWrapperListIcon: {
    minWidth: theme.spacing(5),
  },
}));

const isSelected = (filter, choice) =>
  filter.selected.indexOf(choice.value) !== -1;

export default ({ filter, onClose, dispatch }) => {
  const classes = useStyles();

  const handleSetChosen = choice => () => {
    dispatch({
      type: FILTERS_TOGGLE,
      filter,
      choice,
    });
  };

  return (
    <>
      <Grid
        className={classes.filterWrapperHeader}
        container
        alignItems="center"
        justify="space-between"
      >
        <Grid item>
          <Typography
            className={classes.filterWrapperHeaderTitle}
            variant="subtitle1"
          >
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
        {filter.choices.map(choice => (
          <ListItem key={choice.value} button onClick={handleSetChosen(choice)}>
            <ListItemIcon className={classes.filterWrapperListIcon}>
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
    </>
  );
};
