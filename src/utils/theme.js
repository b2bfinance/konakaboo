import { green, orange, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: teal[500],
    },
    error: {
      main: orange[500],
    },
  },
});

export default theme;
