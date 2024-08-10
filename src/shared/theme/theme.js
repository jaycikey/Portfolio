import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#01080E",
      light: "#011627",
      dark: "#011221",
    },
    secondary: {
      main: "#607B96",
      green: "#3C9D93",
      purple: "#4D5BCE",
      white: "#FFFFFF",
    },
    accent: {
      main: "#FEA55F",
      green: "#43D9AD",
      orange: "#E99287",
      pink: "#C98BDF",
    },
    background: {
      default: "#011221",
      paper: "#011627",
      cell: "#011627d6",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#607B96",
    },
    divider: {
      main: "#1E2D3D",
    },
  },
  typography: {
    fontFamily: "Fira Code, monospace",
    h1: {
      fontSize: "62px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "32px",
      fontWeight: 500,
    },
    h3: {
      fontSize: "24px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "16px",
    },
    caption: {
      fontSize: "14px",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#FEA55F",
            color: "#01080E",
            borderRadius: "0.5em",
            "&:hover": {
              backgroundColor: "#FFAC6B",
              color: "#01080E",
            },
          },
        },
        {
          props: { variant: "default" },
          style: {
            backgroundColor: "#1C2B3A",
            color: "#FFFFFF",
            borderRadius: "0.5em",
            "&:hover": {
              backgroundColor: "#263B50",
              color: "#FFFFFF",
            },
          },
        },
        {
          props: { variant: "ghost" },
          style: {
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "1px solid #FFFFFF",
            borderRadius: "0.5em",
            "&:hover": {
              border: "1px solid rgba(255, 255, 255, 0.5)",
              backgroundColor: "transparent",
              color: "#FFFFFF",
            },
          },
        },
      ],
    },
  },
});

export default theme;
