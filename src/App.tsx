import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/index.tsx";
import Home from "./pages/Home/index.tsx";
import NewContact from "./pages/NewContact/index.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new-contact",
        element: <NewContact />,
      },
    ],
  },
]);
