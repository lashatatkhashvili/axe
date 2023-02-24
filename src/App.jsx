import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/logIn/Login";
import TicTac from "./pages/ticTac/TicTac";
import Watl from "./pages/watl/Watl";
import LineUp from "./pages/lineUp/LineUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/tic-tac",
    element: <TicTac />,
  },
  {
    path: "/watl",
    element: <Watl />,
  },
  {
    path: "/line-up",
    element: <LineUp />,
  },
]);

function App() {
  return <RouterProvider router={router} setName />;
}

export default App;
