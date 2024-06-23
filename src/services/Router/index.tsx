import { Navigate, createBrowserRouter } from "react-router-dom";

// pages
import LoginPage from "../../pages/Auth/Login";

const routes = [
  { path: "/", element: <Navigate to="/login" /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
