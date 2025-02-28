import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import RegistrationForm from "../Pages/RegistrationForm";
import Recommendations from "../Pages/Recommendations";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },  // ✅ Home inside App
      { path: "registration", element: <RegistrationForm /> },  // ✅ Nested under "/"
      { path: "recommendations", element: <Recommendations /> },  // ✅ Nested under "/"
      { path: "dashboard", element: <Dashboard /> },  // ✅ Nested under "/"
    ],
  },
]);

export default router;
