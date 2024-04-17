import { createContext } from "react";
import { Pokemon } from "../models/Pokemon";

interface Context {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
}

const FavContext = createContext<Context>({} as Context);

export default FavContext;
