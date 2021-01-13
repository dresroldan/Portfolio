import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#006064",
    },
  },

  typography: {
    fontFamily: ["Montserrat"],
  },

  shape: {
    borderRadius: 12,
  },


});

export default theme;
