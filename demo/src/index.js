import { Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { render } from "react-dom";
import { EmbedWrapper, theme } from "../../src";
import demoProducts from "./demo-response.json";

const embedOptions = {
  products: demoProducts.data,
  chosenFilters: ["", []],
  availableFilters: [
    {
      title: "Exclude Fees",
      key: "exclude_fees",
      multiChoice: false,
      choices: [
        {
          label: "Yes",
          value: "true",
        },
        {
          label: "No",
          value: "false",
        },
      ],
    },
    {
      title: "LTV",
      key: "ltv",
      multiChoice: true,
      choices: [
        {
          label: "85%",
          value: 85,
        },
        {
          label: "75%",
          value: 75,
        },
      ],
    },
  ],
};

const Demo = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1">Products Embed</Typography>
        </Grid>
        <Grid item xs={12}>
          <EmbedWrapper {...embedOptions} />
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
);

render(<Demo />, document.querySelector("#demo"));
