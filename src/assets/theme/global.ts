import { Interpolation } from "@mui/material";
import { Theme } from "@mui/system/";

const global: Interpolation<Theme> = (theme) => ({
  body: { background: theme.palette.background.primary },
});

export default global;
