import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../types/types";
import { useContext } from "react";
import FavContext from "../../contexts/FavContext";
import { FaEye, FaX } from "react-icons/fa6";
import Types from "../Types";

interface Props {
  pokemons: Pokemon[];
  isFavoritesGrid: boolean;
}

export default function PokemonGrid({ pokemons, isFavoritesGrid }: Props) {
  const navigate = useNavigate();
  const { removeFavorite } = useContext(FavContext);
  return (
    <div className="grid grid-cols-3 xs:gap-x-10 gap-3">
      {pokemons.map((pokemon) => (
        <div
          className={`xs:text-lg hover:opacity-75 hover:shadow-md hover:shadow-black text-base text-gray-200 font-bold outline outline-gray-500 flex group relative flex-col justify-center items-center rounded-xl py-4 px-8 sm:px-16 bg-${pokemon.types[0].type.name}`}
          key={pokemon.id}
        >
          <h1 className="absolute top-0 right-1 text-gray-700">
            {pokemon.id < 10 ? "#00" : pokemon.id < 100 ? "#0" : "#"}
            {pokemon.id}
          </h1>
          <h1 className="mt-2">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>

          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="xs:min-w-24 min-w-20"
          />

          <button
            className="hidden group-hover:inline-block bg-slate-300 text-gray-600 p-2 rounded-full absolute top-1 left-1"
            onClick={() =>
              navigate(`/pokemon/${pokemon.id}`, { replace: true })
            }
          >
            <FaEye size={15} />
          </button>
          {isFavoritesGrid && (
            <button
              className="hidden group-hover:inline-block bg-red-300 text-gray-600 p-2 rounded-full absolute top-1 right-1"
              onClick={() => removeFavorite(pokemon.id)}
            >
              <FaX size={15} />
            </button>
          )}
          <div className="flex xs:flex-row flex-col items-center justify-center xs:space-y-0 space-y-2 xs:space-x-2 text-xs">
            <Types types={pokemon.types} />
          </div>
        </div>
      ))}
    </div>
  );
}
