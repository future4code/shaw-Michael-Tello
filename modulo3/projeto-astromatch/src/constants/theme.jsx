import { createTheme } from "@material-ui/core/";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ec2a08",
      light: "#fbf4fc",
    },

    secondary: {
      main: "#002ae7",
      light: "#8f8f92",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
