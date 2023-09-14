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
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "6px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: "42px",
          padding: "0",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: "-8px",
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "inputLabel" },
          style: {
            fontFamily: "Mulish,Roboto,sansSerif",
            display: "block",
            marginTop: "24px",
            color: "#9FA2B4",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.3px",
            textTransform: "uppercase",
          },
        },
        {
          props: { variant: "authMainText" },
          style: {
            fontFamily: "Mulish,Roboto,sansSerif",
            margin: "32px auto 0",
            fontSize: "24px",
            fontWeight: 700,
            letterSpacing: "0.3px",
          },
        },

        {
          props: { variant: "authLogoText" },
          style: {
            fontFamily: "Mulish,Roboto,sansSerif",
            fontSize: "19px",
            fontWeight: 700,
            color: "#A4A6B3",
            letterSpacing: "0.4px",
          },
        },
      ],
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          marginTop: "24px",
          height: "48px",
          width: "100%",
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
