import { Navigate, createBrowserRouter } from "react-router-dom";

// pages
import LoginPage from "../../pages/Auth/Login";
import HomePage from "../../pages/Home";

const routes = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
