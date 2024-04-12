import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Favorites from "./pages/Favorites";
import ViewPokemon from "./pages/ViewPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pokemon/:id",
        element: <ViewPokemon />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

export default router;
