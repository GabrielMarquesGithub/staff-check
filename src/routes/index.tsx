import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { ErrorBoundary } from "./Error";
import { Root } from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />, // Não é possível manter um layout com essa abordagem
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
