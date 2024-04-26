import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import FavContext from "./contexts/FavContext";
import DarkModeContext from "./contexts/DarkModeContext";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import { Toaster, toast } from "sonner";

export default function App() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function addFavorite(id: number) {
    if (favorites.length >= 9) {
      toast.warning("Max number of favorites reached!");
      return;
    }
    if (favorites.findIndex((value) => value === id) !== -1) {
      toast.warning("This pokémon is already in your favorites!");
      return;
    }
    const newFavorites = [...favorites, id];
    setFavorites(newFavorites);
    toast.success("Pokemón added to favorites!");
  }

  function removeFavorite(id: number) {
    const newFavorites = favorites.filter((pokemonId) => pokemonId != id);
    setFavorites(newFavorites);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        duration={1500}
        closeButton={true}
        theme={darkMode ? "dark" : "light"}
      />
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
          <RouterProvider router={router} />
        </FavContext.Provider>
      </DarkModeContext.Provider>
    </QueryClientProvider>
  );
}
