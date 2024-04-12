import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon, Stat, Ability, Type } from "../../types/types";
import api from "../../services/api";
import FavContext from "../../contexts/FavContext";

function Types({ types }: { types: Type[] }) {
  return (
    <>
      {types.map((data) => (
        <h1 key={data.slot}>
          {data.slot == 1 ? "Primário" : "Secundário"}: {data.type.name}
        </h1>
      ))}
    </>
  );
}

function Stats({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((data) => (
        <h1 key={data.stat.name}>
          {data.stat.name}: {data.base_stat}
        </h1>
      ))}
    </>
  );
}

function Abilities({ abilities }: { abilities: Ability[] }) {
  return (
    <>
      {abilities.map((data) => (
        <h1 key={data.slot}>
          Slot {data.slot} - {data.ability.name}
        </h1>
      ))}
    </>
  );
}

export default function ViewPokemon() {
  const { id } = useParams();
  const { addFavorite } = useContext(FavContext);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    async function getPokemon() {
      await api.get(`/pokemon/${id}`).then((res) => {
        setPokemon(res.data);
      });
    }
    getPokemon();
  }, []);

  if (!pokemon) {
    return <h1 className="text-center">Aguarde um momento...</h1>;
  }

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-2">
        <h1>{pokemon.id}</h1>
        <h1>{pokemon.name}</h1>
        <Types types={pokemon.types} />
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="xs:min-w-24 min-w-20"
        />
      </div>

      <h1>peso: {pokemon.weight}</h1>
      <h1>altura: {pokemon.height}</h1>
      <h1>xp: {pokemon.base_experience}</h1>
      <Stats stats={pokemon.stats} />
      <Abilities abilities={pokemon.abilities} />
      <button
        className="px-3 py-2 bg-slate-300 rounded-xl mt-4"
        onClick={() => addFavorite(pokemon)}
      >
        Favoritar Pokémon
      </button>
    </div>
  );
}
