import { Outlet } from "react-router-dom";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
function Root() {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Essa é a root</Typography>
      <Outlet />
    </Container>
  );
}

export { Root };
