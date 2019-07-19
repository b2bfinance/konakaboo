import { render } from "@testing-library/react";
import { ThemeProvider } from "my-ui-lib";

const Providers = ({ children }) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const renderWithProviders = (ui, options) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { renderWithProviders as render };
