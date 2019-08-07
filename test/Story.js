import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({}));

const Story = ({ children }) => {
  const classes = useStyles();

  return <Container>{children}</Container>;
};

export default Story;
