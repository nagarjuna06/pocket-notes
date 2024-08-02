import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Chat from "./pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
      {
        path: "/:groupId",
        element: <Chat />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
