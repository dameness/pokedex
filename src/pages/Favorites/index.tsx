import { useContext } from "react";
import FavContext from "../../contexts/FavContext";
import PokemonGrid from "../../components/PokemonGrid";

export default function Favorites() {
  const { favorites } = useContext(FavContext);

  if (favorites.length === 0) {
    return <h1 className="text-center">Ainda não há favoritos...</h1>;
  }

  return (
    <div>
      <PokemonGrid pokemons={favorites} isFavoritesGrid={true} />
    </div>
  );
}
