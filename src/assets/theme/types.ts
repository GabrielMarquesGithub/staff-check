import { Palette, PaletteOptions } from "@mui/material/styles";
import { CSSProperties } from "@mui/material/styles/createMixins";

type IBackground = {
  primary: string;
  secondary: string;
  tertiary: string;
};

type IText = {
  primary: string;
  secondary: string;
  highlighted: string;
  inverted: string;
};

type ITypography = {
  base: CSSProperties;
  baseBold: CSSProperties;
  baseBoldHighlighted: CSSProperties;
  big: CSSProperties;
  bigBold: CSSProperties;
  bigBoldHighlighted: CSSProperties;
  large: CSSProperties;
  largeBold: CSSProperties;
  largeBoldHighlighted: CSSProperties;
};

// Tipagem de estilos
declare module "@mui/material/styles" {
  // Omitindo secondary do tema
  interface Theme {
    palette: Omit<Palette, "secondary">;
  }

  interface ThemeOptions {
    paletteOptions?: Omit<PaletteOptions, "secondary">;
  }

  // Alterando vars de tipografia
  interface TypographyVariants extends ITypography {}

  interface TypographyVariantsOptions extends Partial<ITypography> {}

  // Alterando a tipagem de Background
  interface TypeBackground extends IBackground {}

  // Alterando a tipagem de text
  interface TypeText extends IText {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    subtitle1: false;
    subtitle2: false;
    overline: false;
    caption: false;
    button: false;
    inherit: false;
    base: true;
    baseBold: true;
    baseBoldHighlighted: true;
    big: true;
    bigBold: true;
    bigBoldHighlighted: true;
    large: true;
    largeBold: true;
    largeBoldHighlighted: true;
  }
}
