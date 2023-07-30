import { useState } from "react";
import { useTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { MyButton } from "../../components/MyButton";

function Home() {
  const [count, setCount] = useState(0);
  const theme = useTheme(); // Usando o provider de tema do MUI

  theme.palette;

  const handleClick = () => setCount((s) => s + 1);

  return (
    <Container sx={{ display: "block", maxWidth: theme.spacing(800) }}>
      <Typography component="h1" variant="h1" color="Highlight">
        Essa é a Home
      </Typography>
      <Typography component="h2" variant="h2">
        Valor do estado: {count}
      </Typography>
      <Container sx={{ display: "flex", gap: theme.spacing(20) }}>
        <Tooltip title="Ir para um rota invalida">
          <MyButton
            aria-label="Ir para um rota invalida"
            variant="contained"
            onClick={handleClick}
          >
            Incrementar
          </MyButton>
        </Tooltip>
        <Tooltip title="Ir para um rota invalida">
          <MyButton
            aria-label="Ir para um rota invalida"
            href="/teste"
            variant="contained"
          >
            Ir para um rota invalida
          </MyButton>
        </Tooltip>
      </Container>
    </Container>
  );
}

export { Home };
