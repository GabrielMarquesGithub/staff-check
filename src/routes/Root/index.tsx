import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { MyButton } from "../../components/MyButton";
import { MyMenu } from "../../components/MyMenu";
import { MyTypography } from "../../components/MyTypography";
import { MyAvatar } from "../../components/MyAvatar";
import { MyLink } from "../../components/MyLink";

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
          sx={({ spacing }) => ({
            height: "100%",
            padding: spacing(20),
            paddingBottom: 0,
            flexDirection: "column",
            alignItems: "flex-start",
          })}
        >
          <Box
            sx={({ spacing }) => ({
              height: spacing(75),
              width: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
            })}
          >
            <Box component="section">
              <MyTypography component="h1" variant="h1" color="highlighted">
                StaffCheck
              </MyTypography>
              <MyTypography component="h2" variant="subtitle1">
                Empresa Contratante{" "}
              </MyTypography>
            </Box>
            <MyButton
              sx={({ spacing }) => ({
                padding: spacing(10),
                boxShadow: "none",
                display: "flex",
                gap: spacing(10),
                "&:hover": { boxShadow: "none" },
              })}
              ref={anchorRef}
              id="root-button-user-menu"
              aria-controls={open ? "root-user-menu" : undefined}
              aria-expanded={open ? true : undefined}
              aria-haspopup={true}
              aria-label="Abrir menu de usuários"
              onClick={handleOpen}
              disabled={open}
            >
              <MyAvatar name="Gabriel Gatinho" />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <MyTypography component="p" variant="h2">
                  Gabriel Gatinho
                </MyTypography>
                <MyTypography
                  component="span"
                  variant="subtitle2"
                  color="highlighted"
                  fontWeight="fontWeightBold"
                >
                  Gerente
                </MyTypography>
              </Box>
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
          </Box>
          <Divider flexItem={true} />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <nav>
              <MyLink
                title="De volta a home"
                href="/"
                variant="body1"
                color="highlighted"
                fontWeight="fontWeightBold"
              >
                Dashboard
              </MyLink>
            </nav>
          </Box>
        </Toolbar>
      </AppBar>
      <MyTypography component="span" variant="h1">
        Essa é a root
      </MyTypography>
      <Outlet />
    </>
  );
}

export { Root };
