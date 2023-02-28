import { createBrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
