import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";

import { MyButton } from "../../components/MyButton";
import { MyMenu } from "../../components/MyMenu";

function Root() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setOpen((s) => !s);

  return (
    <>
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
            padding: theme.spacing(20),
            paddingBottom: 0,
          })}
        >
          <MyButton
            sx={{
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              "&:hover": { boxShadow: "none" },
            }}
            ref={anchorRef}
            id="root-button-user-menu"
            aria-controls={open ? "root-user-menu" : undefined}
            aria-expanded={open ? true : undefined}
            aria-haspopup={true}
            aria-label="Abrir menu de usuários"
            onClick={handleOpen}
            disabled={open}
          >
            <Typography component="p" variant="big">
              Gabriel Magalhães
            </Typography>
            <Typography component="p" variant="baseBoldHighlighted">
              Gerente
            </Typography>
          </MyButton>
          <MyMenu
            open={open}
            anchorEl={anchorRef.current}
            onClickAway={handleOpen}
            id="root-user-menu"
            aria-labelledby="root-button-open-user-menu"
          >
            <MenuItem onClick={handleOpen}>Profile</MenuItem>
            <MenuItem onClick={handleOpen}>My account</MenuItem>
            <MenuItem onClick={handleOpen}>Logout</MenuItem>
          </MyMenu>
        </Toolbar>
      </AppBar>
      <Typography>Essa é a root</Typography>
      <Outlet />
    </>
  );
}

export { Root };
