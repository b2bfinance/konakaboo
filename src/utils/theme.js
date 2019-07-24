import { createMuiTheme } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    product: {
      headingHighlightIcon: orange[300]
    }
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      fontWeight: 600,
      fontSize: "3.75rem"
    },
    h2: {
      fontWeight: 600,
      fontSize: "3.25rem"
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.75rem"
    },
    h4: {
      fontWeight: 400,
      fontSize: "2rem"
    },
    h5: {
      fontWeight: 400,
      fontSize: "1.5rem"
    },
    h6: {
      fontWeight: 400
    }
  }
});

export default theme;
