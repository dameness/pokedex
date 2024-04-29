import PokemonGrid from "../../components/PokemonGrid";
import { FaStar } from "react-icons/fa6";
import { useAppSelector } from "@/hooks/useReduxHooks";

export default function Favorites() {
  const { favorites } = useAppSelector((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <h1 className="text-center dark:text-neutral-200">
        There's still no favorites...
      </h1>
    );
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
