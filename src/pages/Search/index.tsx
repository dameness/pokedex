import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PokemonGrid from "../../components/PokemonGrid";
import PageButtons from "../../components/PageButtons";
import { PokemonListItem } from "@/models/PokemonListItem";
import { useFetchPokemonList } from "@/services/pokemon/useFetchPokemonList";

export default function Search() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const { data, isLoading } = useFetchPokemonList();

  const pokemonList: PokemonListItem[] = data;

  const getPokemonIds = () => {
    return pokemonIds.slice(
      perPage * (page - 1),
      perPage * (page - 1) + perPage
    );
  };

  const filterPokemons = () => {
    const data = pokemonList.filter((pokemon) => pokemon.name.includes(input));

    const Ids: number[] = [];

    data.forEach((pokemon) => {
      Ids.push(+pokemon.url.slice(34, -1));
    });

    setPage(1);
    setPokemonIds(Ids);
  };

  if (isLoading) {
    return <h1 className="text-center dark:text-neutral-200">Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-4xl dark:text-neutral-200 font-bold text-slate-800 mb-6 flex items-center justify-center gap-2">
        <FaSearch />
        Search
      </h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center mb-8 gap-1">
          <input
            className="bg-white px-4 py-2 rounded-lg "
            type="text"
            placeholder="Search pokémon..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="p-3 rounded-lg bg-slate-200 hover:bg-slate-700 hover:text-slate-200 transition-all"
            onClick={filterPokemons}
          >
            <FaSearch />
          </button>
        </div>

        {pokemonIds.length > 0 && (
          <>
            <PokemonGrid pokemonIds={getPokemonIds()} isFavoritesGrid={false} />
            <PageButtons
              setPage={setPage}
              maxPages={Math.ceil(pokemonIds.length / perPage)}
            />
          </>
        )}
      </div>
    </>
  );
}
