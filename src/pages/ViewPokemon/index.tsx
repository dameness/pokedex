import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../../models/Pokemon";
import api from "../../config/api";
import FavContext from "../../contexts/FavContext";
import Types from "../../components/Types";
import Stats from "./utils/Stats";
import Abilities from "./utils/Abilities";
import StandardButton from "@/components/StandardButton";

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
    <div className="flex sm:flex-row gap-y-8 flex-col-reverse items-center justify-around">
      <div className="flex flex-col justify-start bg-slate-300 p-4 rounded-2xl">
        <div className="flex items-center gap-4 mb-3">
          <h1 className="text-3xl font-bold">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </h1>

          <div className="flex items-center gap-4">
            <Types types={pokemon.types} />
          </div>
        </div>
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
        <div className="flex items-center gap-2"></div>
        <div></div>
      </div>
      <div className="flex gap-y-4 flex-col justify-center items-center">
        <img
          src={
            pokemon.sprites.other?.dream_world?.front_default ||
            pokemon.sprites.front_default
          }
          alt={pokemon.name}
          className="min-w-80 w-80"
        />
        <StandardButton onClick={() => addFavorite(pokemon.id)}>
          Add Favorite
        </StandardButton>
      </div>
    </div>
  );
}
