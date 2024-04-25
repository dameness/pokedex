import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FavContext from "../../contexts/FavContext";
import Types from "../Types";
import { FaEye, FaX } from "react-icons/fa6";
import { useQuery } from "react-query";
import { getPokemon } from "@/services/pokemon/getPokemon";
import { Pokemon } from "@/models/Pokemon";
import SkeletonCard from "./utils/SkeletonCard";

interface Props {
  pokemonId: number;
  isFavoritesGrid: boolean;
}

function Card({ pokemonId, isFavoritesGrid }: Props) {
  const navigate = useNavigate();
  const { removeFavorite } = useContext(FavContext);

  const { data, isLoading } = useQuery(["pokemon", pokemonId], () =>
    getPokemon(pokemonId)
  );
  const pokemon: Pokemon = data;

  if (isLoading) {
    return <SkeletonCard />;
  }
  return (
    <>
      {pokemon && (
        <div
          className={`  
          h-full
          sm:px-16 py-4 px-12  max-w-min
          relative flex group flex-col justify-center items-center rounded-xl 
          xs:text-lg text-base text-gray-200 font-bold 
          hover:opacity-85 hover:shadow-md hover:shadow-black 
          bg-gradient-to-b from-${pokemon.types[0].type.name} dark:to-neutral-600 to-slate-200 outline outline-${pokemon.types[0].type.name}`}
          key={pokemon.id}
        >
          <h1 className="dark:text-neutral-800/50 text-gray-600/50 sm:text-5xl text-3xl z-0 tracking-wide">
            {pokemon.id < 10 ? "#00" : pokemon.id < 100 ? "#0" : "#"}
            {pokemon.id}
          </h1>
          <h1 className="mt-0.5 z-10 dark:text-neutral-300">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>

          <img
            src={
              pokemon.sprites.other?.dream_world?.front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            className="sm:min-w-32 sm:h-32 xs:min-w-28 xs:h-28 min-w-24 h-24"
          />

          <button
            className="hidden group-hover:inline-block bg-slate-300 text-gray-600 p-2 rounded-full absolute top-1 left-1 hover:scale-105 hover:text-gray-700 transition-all"
            onClick={() =>
              navigate(`/pokemon/${pokemon.id}`, { replace: true })
            }
          >
            <FaEye size={15} />
          </button>
          {isFavoritesGrid && (
            <button
              className="hidden group-hover:inline-block bg-red-300 text-gray-600 p-2 rounded-full absolute top-1 right-1  hover:scale-105 hover:text-gray-700 transition-all"
              onClick={() => removeFavorite(pokemon.id)}
            >
              <FaX size={15} />
            </button>
          )}
          <div className="mt-4 flex xs:flex-row flex-col items-center justify-center xs:space-y-0 space-y-2 xs:space-x-2 text-xs">
            <Types types={pokemon.types} />
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Card);
