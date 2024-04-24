import { useContext } from "react";
import { useParams } from "react-router-dom";
import FavContext from "../../contexts/FavContext";
import Types from "../../components/Types";
import Stats from "./utils/Stats";
import Abilities from "./utils/Abilities";
import StandardButton from "@/components/StandardButton";
import AttributeDiv from "./utils/AttributeDiv";
import { Star } from "lucide-react";
import { useQuery } from "react-query";
import { getPokemon } from "@/services/pokemon/getPokemon";
import { Pokemon } from "@/models/Pokemon";

export default function ViewPokemon() {
  const { id } = useParams<{ id: string }>() as { id: string };
  const { addFavorite } = useContext(FavContext);

  const { data, isFetching } = useQuery(["pokemon", id], () => getPokemon(+id));
  const pokemon: Pokemon = data;

  if (isFetching || !pokemon) {
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
        <AttributeDiv>
          <h1 className="text-xs">WEIGHT :</h1>
          <h1 className="text-sm">{pokemon.weight}</h1>
        </AttributeDiv>
        <AttributeDiv>
          <h1 className="text-xs">HEIGHT :</h1>
          <h1 className="text-sm">{pokemon.height}</h1>
        </AttributeDiv>
        <AttributeDiv>
          <h1 className="text-xs">XP :</h1>
          <h1 className="text-sm">{pokemon.base_experience}</h1>
        </AttributeDiv>
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
          <Star className="-mr-0.5" size={20} />
          Add to Favorites
        </StandardButton>
      </div>
    </div>
  );
}
