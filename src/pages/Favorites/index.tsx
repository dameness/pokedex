import { useContext } from "react";
import FavContext from "../../contexts/FavContext";
import PokemonGrid from "../../components/PokemonGrid";
import { FaStar } from "react-icons/fa6";

export default function Favorites() {
  const { favorites } = useContext(FavContext);

  if (favorites.length === 0) {
    return <h1 className="text-center">There's still no favorites...</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl dark:text-neutral-200 font-bold text-slate-800 mb-6 text-center flex items-center justify-center gap-2">
        <FaStar />
        Favorites
      </h1>
      <PokemonGrid pokemonIds={favorites} isFavoritesGrid={true} />
    </div>
  );
}
