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
function App() {
  return (
    <div className="App">
      <h1>new project</h1>
    </div>
  );
}

export default router;
