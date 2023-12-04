import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

// `extendTheme` is a new API
const theme = extendTheme({
  trello: {
    appBarHeight: "60px",
    boardBarHeight: "60px",
  },
  colorSchemes: {
    light: {
      // palette for light mode
      palette: {
        primary: {
          main: "#2196f3", // Set your primary color for light mode
        },
        secondary: {
          main: "#f50057", // Set your secondary color for light mode
        },
      },
    },
    dark: {
      // palette for dark mode
      palette: {
        primary: {
          main: "#2196f3", // Set your primary color for dark mode
        },
        secondary: {
          main: "#f50057", // Set your secondary color for dark mode
        },
      },
    },
  },
});

export default theme;
