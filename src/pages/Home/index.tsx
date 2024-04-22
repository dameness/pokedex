import { useEffect, useState } from "react";
import PokemonGrid from "../../components/PokemonGrid";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Home() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  async function getPokemonIds() {
    const ids = [];
    for (var i = (page - 1) * perPage + 1; i <= page * perPage; i++) {
      ids.push(i);
    }
    setPokemonIds(ids);
  }

  useEffect(() => {
    getPokemonIds();
  }, [page]);

  return (
    <div className="flex flex-col justify-center items-center xs:text-base text-xs">
      <PokemonGrid pokemonIds={pokemonIds} isFavoritesGrid={false} />
      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          className="px-3 py-2 bg-slate-300 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-slate-100 transition"
          onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
        >
          <FaAngleLeft />
          Prev.
        </button>
        <button
          className="px-3 py-2 bg-slate-300 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-slate-100 transition"
          onClick={() => setPage((page) => page + 1)}
        >
          Next
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
