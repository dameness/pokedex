import { useEffect, useState } from "react";
import PokemonGrid from "../../components/PokemonGrid";
import PageButtons from "../../components/PageButtons";

export default function Home() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  const getPokemonIds = () => {
    const ids = [];
    for (var i = (page - 1) * perPage + 1; i <= page * perPage; i++) {
      ids.push(i);
    }
    setPokemonIds(ids);
  };

  useEffect(() => {
    getPokemonIds();
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center xs:text-base text-xs">
      <PokemonGrid pokemonIds={pokemonIds} isFavoritesGrid={false} />

      <PageButtons setPage={setPage} />
    </div>
  );
}
