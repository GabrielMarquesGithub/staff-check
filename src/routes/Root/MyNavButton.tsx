import Tooltip from "@mui/material/Tooltip";

import { MyButton, IMyButtonProps } from "../../components/MyButton";

type IMyNavButtonProps = Pick<IMyButtonProps, "startIcon" | "children"> & {
  url: string;
  active: boolean;
};

const MyNavButton = ({ url, active, children, ...rest }: IMyNavButtonProps) => {
  return (
    <Tooltip title={`Ir para a pagina ${children}`}>
      <MyButton
        variant={active ? "contained" : "text"}
        aria-label={`Ir para a pagina ${children}`}
        href={url}
        {...rest}
        sx={(theme) => ({
          paddingX: theme.spacing(20),
          paddingY: theme.spacing(10),
          borderRadius: 0,
          borderStartEndRadius: 15,
          borderStartStartRadius: 15,
          boxShadow: "none",
          pointerEvents: active ? "none" : undefined,
          "&:hover": { boxShadow: "none" },
          path: {
            fill: theme.palette.text[active ? "inverted" : "highlighted"],
          },
        })}
      >
        {children}
      </MyButton>
    </Tooltip>
  );
};

export { MyNavButton };
