import {
  blue,
  green,
  grey,
  orange,
  pink,
  teal,
} from "@material-ui/core/colors";
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
  tablo: {
    productHeadingRow: {
      logoBorder: grey[200],
      background: "transparent",
      backgroundMobile: "white",
      logoBackground: "white",
      highlightedIcon: orange[300],
      ribbonBackground: orange[300],
    },
    productWrapper: {
      bodyBackground: "white",
      bodyBorder: grey[200],
      moreInfoColor: blue[800],
      descriptionBorder: grey[200],
    },
    productColumns: {
      border: grey[200],
    },
    productFeaturePoint: {
      background: grey[200],
      icon: pink[300],
      text: null, // use default
    },
    productMoreInfoHeader: {
      headerBorder: grey[200],
    },
    productMoreInfoBody: {
      disclaimerBackground: grey[200],
    },
    productMoreInfoFooter: {
      border: grey[200],
    },
  },
});

console.log(theme);

export default theme;
