import { RouterProvider } from "react-router-dom";

// services
import router from "services/Router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
