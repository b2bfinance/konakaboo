import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";
import { theme } from "../src/utils";

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const renderWithProviders = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { renderWithProviders as render };
