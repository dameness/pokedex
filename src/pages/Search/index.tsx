import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import PokemonGrid from "../../components/PokemonGrid";
import PageButtons from "../../components/PageButtons";
import { PokemonListItem } from "@/models/PokemonListItem";
import { useFetchPokemonList } from "@/services/pokemon/useFetchPokemonList";
import { toast } from "sonner";

export default function Search() {
  const [pokemonIds, setPokemonIds] = useState<number[]>([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 9;

  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isLoading } = useFetchPokemonList();

  const pokemonList: PokemonListItem[] = data;

  const getPokemonIds = () => {
    return pokemonIds.slice(
      perPage * (page - 1),
      perPage * (page - 1) + perPage
    );
  };

  const filterStartsWith = pokemonList?.filter(
    (pokemon) =>
      input && pokemon.name.toLowerCase().startsWith(input.toLowerCase())
  );

  const filterIncludes = pokemonList?.filter(
    (pokemon) =>
      input && pokemon.name.toLowerCase().includes(input.toLowerCase())
  );

  const suggestions =
    filterStartsWith?.length > 0 ? filterStartsWith : filterIncludes;

  const filterPokemons = (event: React.FormEvent) => {
    event.preventDefault();
    if (input.length == 0) return;

    const data = filterIncludes;

    const Ids: number[] = [];

    data.forEach((pokemon) => {
      Ids.push(+pokemon.url.slice(34, -1));
    });

    if (Ids.length == 0)
      toast.error("No pokemóns found!", { position: "top-center" });

    setPage(1);
    setInput("");
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
        <form
          className="flex items-center mb-8 gap-1 relative"
          onSubmit={filterPokemons}
        >
          <input
            className=" bg-white px-4 py-2 rounded-lg "
            type="text"
            placeholder="Search pokémon..."
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="p-3 rounded-lg bg-slate-200 hover:bg-neutral-600 hover:text-slate-200 transition-all"
            type="submit"
          >
            <FaSearch />
          </button>

          <ul
            className={`${
              filterIncludes.length == 0 && "hidden"
            } border absolute hover:cursor-pointer top-10 px-4 py-2 z-50 bg-white w-[84%] rounded-lg`}
          >
            {suggestions.slice(0, 5).map((item) => (
              <li
                className="py-0.5"
                key={item.name}
                onClick={() => {
                  setInput(item.name);
                  inputRef.current?.focus();
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </form>

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
