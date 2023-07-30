import { Palette, PaletteOptions } from "@mui/material/styles";

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

// Tipagem de estilos
declare module "@mui/material/styles" {
  // Omitindo secondary do tema
  interface Theme {
    palette: Omit<Palette, "secondary">;
  }

  interface ThemeOptions {
    paletteOptions?: Omit<PaletteOptions, "secondary">;
  }

  // Alterando a tipagem de Background
  interface TypeBackground extends IBackground {}

  // Alterando a tipagem de text
  interface TypeText extends IText {}
}
