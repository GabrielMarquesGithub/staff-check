import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";

// Create a theme instance.
const theme = createTheme({
  palette,
  typography,
  spacing,
});

export default theme;
