import Typography, {
  TypographyTypeMap,
  TypographyProps,
} from "@mui/material/Typography";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Palette, TypographyVariants, useTheme } from "@mui/material/styles";

export type IMyTypographyProps = Omit<
  TypographyProps,
  "color" | "fontWeight" | "component"
> & {
  color?: keyof Palette["text"];
  fontWeight?: keyof Pick<
    TypographyVariants,
    "fontWeightRegular" | "fontWeightBold"
  >;
};

type IMyTypography = OverridableComponent<
  TypographyTypeMap<IMyTypographyProps>
>;

const MyTypography: IMyTypography = ({
  color,
  fontWeight,
  ...rest
}: IMyTypographyProps) => {
  const theme = useTheme();
  const chosenColor = color ? theme.palette.text[color] : undefined;
  const chosenFontWeight = fontWeight
    ? theme.typography[fontWeight]
    : undefined;

  return (
    <Typography fontWeight={chosenFontWeight} color={chosenColor} {...rest} />
  );
};

export { MyTypography };
