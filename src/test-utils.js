import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";
import theme from "./utils";

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const renderWithProviders = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { renderWithProviders as render };

export const filters = {
  withNoChosen: { chosen: {} },
  withNullMultiChoiceChosen: {
    chosen: {
      0: [undefined, ""],
    },
    available: [
      {
        multiChoice: true,
        key: "TEST_KEY",
      },
    ],
  },
  withNullSingleChoiceChosen: {
    chosen: {
      0: undefined,
    },
    available: [
      {
        multiChoice: false,
        key: "TEST_KEY",
      },
    ],
  },
  withMultiChoiceChosen: {
    chosen: {
      0: ["TEST_CHOICE", "TEST_CHOICE"],
    },
    available: [
      {
        multiChoice: true,
        key: "TEST_KEY",
      },
    ],
  },
  withSingleChoiceChosen: {
    chosen: {
      0: "TEST_CHOICE",
    },
    available: [
      {
        multiChoice: false,
        key: "TEST_KEY",
      },
    ],
  },
  withSingleAndMultiChoiceChosen: {
    chosen: {
      0: ["TEST_CHOICE_1", "TEST_CHOICE_2"],
      1: "TEST_CHOICE_1",
    },
    available: [
      {
        title: "Test Title 1",
        multiChoice: true,
        key: "TEST_KEY_1",
        choices: [
          { label: "TEST_CHOICE_1_LABEL", value: "TEST_CHOICE_1" },
          { label: "TEST_CHOICE_2_LABEL", value: "TEST_CHOICE_2" },
        ],
      },
      {
        title: "Test Title 2",
        multiChoice: false,
        key: "TEST_KEY_2",
        choices: [
          { label: "TEST_CHOICE_1_LABEL", value: "TEST_CHOICE_1" },
          { label: "TEST_CHOICE_2_LABEL", value: "TEST_CHOICE_2" },
        ],
      },
    ],
  },
};
