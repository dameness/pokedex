import { createContext } from "react";
import { Pokemon } from "../types/types";

interface Context {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
}

const FavContext = createContext<Context>({} as Context);

export default FavContext;
