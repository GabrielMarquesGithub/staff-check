import AppBar from "@mui/material/AppBar";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";

type IRootHeaderProps = Pick<ToolbarProps, "children">;

const RootHeader = ({ children }: IRootHeaderProps) => {
  return (
    <AppBar
      position="static"
      sx={(theme) => ({
        width: "100%",
        height: theme.spacing(170),
        background: theme.palette.background.secondary,
      })}
    >
      <Toolbar
        disableGutters // Desativando padding
        sx={(theme) => ({
          height: "100%",
          padding: theme.spacing(20),
          paddingBottom: 0,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
        })}
      >
        {children}
      </Toolbar>
    </AppBar>
  );
};

export { RootHeader };
