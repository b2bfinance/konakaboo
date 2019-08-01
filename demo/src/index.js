import { Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { render } from "react-dom";
import { EmbedWrapper } from "../../src";
import { theme } from "../../src/utils";
import demoProducts from "./demo-response.json";

const Demo = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h1">Products Embed</Typography>
        </Grid>
        <Grid item xs={12}>
          <EmbedWrapper products={demoProducts.data} />
        </Grid>
      </Grid>
    </Container>
  </ThemeProvider>
);

render(<Demo />, document.querySelector("#demo"));
