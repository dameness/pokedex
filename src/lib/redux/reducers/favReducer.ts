import { Slice, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface favSliceState {
  favorites: number[];
}

const initialState = () => {
  const pokemons = localStorage.getItem("favorite-pokemons");
  const data: number[] = pokemons ? JSON.parse(pokemons) : [];
  return {
    favorites: data,
  };
};

const favSlice: Slice<favSliceState> = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload;

      if (state.favorites.length >= 9) {
        toast.warning("Max number of favorites reached!");
        return;
      }
      if (state.favorites.findIndex((value) => value === id) !== -1) {
        toast.warning("This pokémon is already in your favorites!");
        return;
      }

      state.favorites.push(id);
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
      toast.success("Pokemón added to favorites!");
    },
    removeFavorite: (state, action) => {
      const id = action.payload;

      const newFavorites = state.favorites.filter(
        (pokemonId) => pokemonId != id
      );
      state.favorites = newFavorites;
      localStorage.setItem("favorite-pokemons", JSON.stringify(newFavorites));
      toast.success("Pokemón removed from favorites!");
    },
  },
});

export const { addFavorite, removeFavorite } = favSlice.actions;
export const favReducer = favSlice.reducer;
