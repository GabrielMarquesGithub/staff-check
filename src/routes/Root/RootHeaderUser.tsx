import { useRef, useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { MyButton } from "../../components/MyButton";
import { MyMenu } from "../../components/MyMenu";
import { MyAvatar } from "../../components/MyAvatar";

type IRootHeaderUserProps = { user: string; role: string };

const RootHeaderUser = ({ user, role }: IRootHeaderUserProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setOpen((s) => !s);

  return (
    <>
      <MyButton
        ref={anchorRef}
        id="root-button-user-menu"
        aria-controls={open ? "root-user-menu" : undefined}
        aria-expanded={open ? true : undefined}
        aria-haspopup={true}
        aria-label="Abrir menu d usuário"
        onClick={handleOpen}
        disabled={open}
        sx={(theme) => ({
          padding: theme.spacing(10),
          boxShadow: "none",
          display: "flex",
          gap: theme.spacing(10),
          "&:hover": { boxShadow: "none" },
        })}
      >
        <MyAvatar name={user} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography component="p" variant="h2">
            {user}
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            color={(theme) => theme.palette.text.highlighted}
            fontWeight="fontWeightBold"
          >
            {role}
          </Typography>
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
    </>
  );
};

export { RootHeaderUser };
