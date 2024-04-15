import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import FavContext from "./contexts/FavContext";
import { useState } from "react";
import { Pokemon } from "./types/types";

export default function App() {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  function addFavorite(pokemon: Pokemon) {
    if (favorites.length >= 9) {
      alert("Você alcançou o número máximo de favoritos!");
      return;
    }
    if (favorites.findIndex((value) => value.id === pokemon.id) !== -1) {
      console.log(favorites.findIndex((value) => value.id === pokemon.id));
      alert("Este pokémon já está nos favoritos!");
      return;
    }
    const newFavorites = [...favorites, pokemon];
    setFavorites(newFavorites);
  }

  function removeFavorite(id: number) {
    const newFavorites = favorites.filter((pokemon) => pokemon.id != id);
    setFavorites(newFavorites);
  }

  return (
    <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      <RouterProvider router={router} />
    </FavContext.Provider>
  );
}
