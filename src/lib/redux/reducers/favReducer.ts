import { Slice, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface favSliceState {
  favorites: number[];
}

const initialState: favSliceState = {
  favorites: [],
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
      toast.success("Pokemón added to favorites!");
    },
    removeFavorite: (state, action) => {
      const id = action.payload;

      const newFavorites = state.favorites.filter(
        (pokemonId) => pokemonId != id
      );
      state.favorites = newFavorites;
      toast.success("Pokemón removed from favorites!");
    },
  },
});

export const { addFavorite, removeFavorite } = favSlice.actions;
export const favReducer = favSlice.reducer;
