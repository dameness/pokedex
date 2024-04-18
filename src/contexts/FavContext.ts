import { createContext } from "react";

interface Context {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
}

const FavContext = createContext<Context>({} as Context);

export default FavContext;
