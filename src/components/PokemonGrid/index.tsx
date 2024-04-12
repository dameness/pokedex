import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../types/types";
import { useContext } from "react";
import FavContext from "../../contexts/FavContext";
import { FaEye, FaX } from "react-icons/fa6";

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
          className={`flex group relative flex-col justify-center items-center rounded-xl py-4 px-8 sm:px-16 bg-${pokemon.types[0].type.name}`}
          key={pokemon.id}
        >
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="xs:min-w-24 min-w-20"
          />

          <button
            className="hidden group-hover:inline-block bg-slate-300 px-2 rounded-full absolute top-1 left-1"
            onClick={() =>
              navigate(`/pokemon/${pokemon.id}`, { replace: true })
            }
          >
            <FaEye size={15} />
          </button>
          {isFavoritesGrid && (
            <button
              className="hidden group-hover:inline-block bg-red-300 px-2 rounded-full absolute top-1 right-1"
              onClick={() => removeFavorite(pokemon.id)}
            >
              <FaX size={15} />
            </button>
          )}
          <div className="flex items-center justify-center space-x-1 text-xs">
            {pokemon.types.map((data) => (
              <h1 key={data.slot}>{data.type.name}</h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
