import { createTheme } from "@mui/material/styles";

const spacing = (factor: number) => `${(factor / 10 / 100) * 62.5}rem`; // 10 Px => 1 Rem, FontSize 10px

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: "#1980BD",
      main: "#20A4F3",
      light: "#52B8F6",
      contrastText: "#ffffff",
    },
    background: {
      primary: "#EBEFF2",
      secondary: "#FFFFFF",
      tertiary: "#F7F8FC",
    },
    divider: "#EBEFF2",
    text: {
      primary: "#000000",
      secondary: "#4F4F4F",
      highlighted: "#20A4F3",
      inverted: "#ffffff",
    },
  },
  typography: {
    fontWeightBold: 400,
    fontWeightLight: 400,
    fontWeightMedium: 400,
    fontWeightRegular: 400,
    button: {
      textTransform: undefined,
    },
    base: {
      fontWeight: 700,
      fontSize: spacing(16),
    },
    baseBoldHighlighted: {
      color: "#20A4F3",
      fontWeight: 700,
      fontSize: spacing(16),
    },
    big: {
      color: "#000000",
      fontSize: spacing(20),
    },
    bigBold: {
      color: "#000000",
      fontFamily: "'League Spartan', 'Helvetica', sans-serif",
      fontSize: spacing(35),
    },
  },
  spacing,
});

export default theme;
