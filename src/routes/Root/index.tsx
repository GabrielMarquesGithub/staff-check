import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { RootHeader } from "./RootHeader";
import { RootHeaderBrand } from "./RootHeaderBrand";
import { RootHeaderUser } from "./RootHeaderUser";
import { RootHeaderNav } from "./RootHeaderNav";

const Root = () => {
  return (
    <>
      <RootHeader>
        <Box
          component="section"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <RootHeaderBrand company="Empresa Contratante" />
          <RootHeaderUser user="Gabriel Marques" role="Gerente" />
        </Box>
        <Divider flexItem={true} />
        <Box
          component="section"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <RootHeaderNav />
        </Box>
      </RootHeader>
      <Outlet />
    </>
  );
};

export { Root };
