import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import FavContext from "./contexts/FavContext";
import { useState } from "react";
import { Pokemon } from "./types/types";

export default function App() {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  function addFavorite(pokemon: Pokemon) {}

  function removeFavorite(id: number) {}

  return (
    <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      <RouterProvider router={router} />
    </FavContext.Provider>
  );
}
