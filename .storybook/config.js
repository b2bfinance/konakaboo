import { ThemeProvider } from "@material-ui/styles";
import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { theme } from "../src/utils";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ProvidersDecorator = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

addDecorator(ProvidersDecorator);
configure(loadStories, module);
