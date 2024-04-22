import { useState } from "react";
import { useFetchAllPokemons } from "../../services/pokemon/fetchAllPokemons";
import { FaSearch } from "react-icons/fa";
import PokemonGrid from "../../components/PokemonGrid";
import PageButtons from "../../components/PageButtons";

export default function Search() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const { pokemonList, isFetching } = useFetchAllPokemons();

  const getPokemonIds = () => {
    const displayIds: number[][] = [];

    for (let i = 0; i < pokemonIds.length; i += perPage) {
      displayIds.push(pokemonIds.slice(i, i + perPage));
    }
    return displayIds[page - 1];
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
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

  if (isFetching === true) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center gap-2 bg-white w-min px-4 py-2 rounded-lg mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="p-3 rounded-lg bg-slate-200"
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
  );
}
