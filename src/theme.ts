import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#3751FF",
    },
  },
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

    MuiInputBase: {
      styleOverrides: {
        input: {
          height: "42px",
          padding: 0,
        },
      },
    },
  },
});

export default theme;
