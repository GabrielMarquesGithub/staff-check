import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Container from "@mui/material/Container";
import { MyLink } from "../../components/MyLink";

function ErrorBoundary() {
  const error = useRouteError();

  let text = "Error";

  if (error instanceof Error) {
    text = error.message;
  }

  //Lidar com erros disparados pelo router
  if (isRouteErrorResponse(error)) {
    text = error.status + " - " + error.statusText;
  }

  return (
    <Container sx={{ display: "inline" }}>
      <MyLink aria-label="De volta a home" variant="h2" href="/">
        {text}
      </MyLink>
    </Container>
  );
}

export { ErrorBoundary };
