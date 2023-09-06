import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  typography: {
    fontFamily: "Mulish, Roboto, sans-serif",
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          "@media (min-width: 1200px)": {
            maxWidth: "none",
          },
          "@media (min-width: 600px)": {
            paddingLeft: "0",
            paddingRight: "0",
          },
        },
      },
    },
  },
});

export default theme;
