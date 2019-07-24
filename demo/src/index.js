import { Container, Grid, Typography } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React, { Component } from "react";
import { render } from "react-dom";
import ProductsEmbed from "../../src";
import theme from "../../src/utils/theme";
import demoProducts from "./demo-response.json";

class Demo extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">Products Embed</Typography>
            </Grid>
            <Grid item xs={12}>
              <ProductsEmbed
                products={{
                  products: demoProducts
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
