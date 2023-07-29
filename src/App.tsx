import { RouterProvider } from "react-router-dom";

import { router } from "./routes"; // Minhas rotas

function App() {
  return <RouterProvider router={router} />;
}

export default App;
