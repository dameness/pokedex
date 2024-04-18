import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../models/Pokemon";
import api from "../../config/api";
import FavContext from "../../contexts/FavContext";
import Types from "../../components/Types";
import Stats from "./utils/Stats";
import Abilities from "./utils/Abilities";

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
    return <h1 className="text-center">Loading...</h1>;
  }

  return (
    <div className="text-center w-11/12 mx-auto">
      <div
        className={`relative flex bg-slate-300 rounded-lg p-2 mb-4 items-center justify-center space-x-2`}
      >
        <h1 className="absolute top-1 left-2 text-2xl font-bold">
          {pokemon.id < 10 ? "#00" : pokemon.id < 100 ? "#0" : "#"}
          {pokemon.id}
        </h1>
        <h1 className="xs:text-2xl text-xl">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h1>

        <div className="flex xs:flex-row flex-col xs:space-x-2 xs:space-y-0 space-y-2">
          <Types types={pokemon.types} />
        </div>

        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="xs:min-w-24 min-w-20"
        />
      </div>

      <div className="space-y-1.5">
        <div className="font-extrabold rounded-sm py-1.5 px-6 bg-slate-300 flex items-center justify-between">
          <h1 className="text-xs">WEIGHT :</h1>
          <h1 className="text-sm">{pokemon.weight}</h1>
        </div>
        <div className="font-extrabold rounded-sm py-1.5 px-6 bg-slate-300 flex items-center justify-between">
          <h1 className="text-xs">HEIGHT :</h1>
          <h1 className="text-sm">{pokemon.height}</h1>
        </div>
        <div className="font-extrabold rounded-sm py-1.5 px-6 bg-slate-300 flex items-center justify-between">
          <h1 className="text-xs">XP :</h1>
          <h1 className="text-sm">{pokemon.base_experience}</h1>
        </div>
        <Stats stats={pokemon.stats} />
        <Abilities abilities={pokemon.abilities} />
      </div>
      <button
        className="px-3 py-2 bg-slate-300 rounded-xl mt-4"
        onClick={() => addFavorite(pokemon.id)}
      >
        Add Favorite
      </button>
    </div>
  );
}
