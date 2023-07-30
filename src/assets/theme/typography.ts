import { TypographyVariantsOptions } from "@mui/material/styles";

import spacing from "./spacing";
import palette from "./palette";

const typography: TypographyVariantsOptions = {
  fontWeightRegular: 400,
  fontWeightBold: 700,
  allVariants: {
    fontFamily: "'Roboto', 'Helvetica', sans-serif",
    fontWeight: 400,
    textTransform: undefined,
    color: palette.text?.primary,
  },
  h1: {
    fontFamily: "'League Spartan', 'Helvetica', sans-serif",
    fontSize: spacing(35),
    lineHeight: spacing(35),
    fontWeight: 700,
  },
  h2: {
    fontSize: spacing(20),
    lineHeight: spacing(20),
  },
  subtitle1: {
    fontSize: spacing(20),
    lineHeight: spacing(20),
  },
  subtitle2: {
    fontSize: spacing(16),
    lineHeight: spacing(16),
  },
  body1: { fontSize: spacing(16), lineHeight: spacing(16) },
};

export default typography;
