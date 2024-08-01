import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
