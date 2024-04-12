import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../types/types";

interface Props {
  pokemons: Pokemon[];
}
export default function PokemonGrid({ pokemons }: Props) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3 xs:gap-x-10 gap-3">
      {pokemons.map((pokemon) => (
        <button
          className={`flex flex-col justify-center items-center rounded-xl py-4 px-8 sm:px-16 bg-${pokemon.types[0].type.name}`}
          key={pokemon.id}
          onClick={() => navigate(`pokemon/${pokemon.id}`)}
        >
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="xs:min-w-24 min-w-20"
          />
          <div className="flex items-center justify-center space-x-1 text-xs">
            {pokemon.types.map((data) => (
              <h1 key={data.slot}>{data.type.name}</h1>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
