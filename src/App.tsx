import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import FavContext from "./contexts/FavContext";
import { useState } from "react";

export default function App() {
  const [favorites, setFavorites] = useState<number[]>([]);

  function addFavorite(id: number) {
    if (favorites.length >= 9) {
      alert("Você alcançou o número máximo de favoritos!");
      return;
    }
    if (favorites.findIndex((value) => value === id) !== -1) {
      alert("Este pokémon já está nos favoritos!");
      return;
    }
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
  }

  function removeFavorite(id: number) {
    const newFavorites = favorites.filter((pokemonId) => pokemonId != id);
    setFavorites(newFavorites);
  }

  return (
    <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      <RouterProvider router={router} />
    </FavContext.Provider>
  );
}
