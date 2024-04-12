import { useEffect, useState } from "react";
import api from "../../services/api";
import { Pokemon } from "../../types/types";
import axios from "axios";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;

  async function getPokemons() {
    let endpoints = [];
    for (let i = (page - 1) * perPage + 1; i <= page * perPage; i++) {
      endpoints.push(`/pokemon/${i}`);
    }
    try {
      await axios
        .all(endpoints.map((endpoint) => api.get(endpoint)))
        .then((res) => {
          let pokemons: Pokemon[] = [];
          res.map((element) => {
            pokemons.push(element.data);
          });
          setPokemons(pokemons);
        });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPokemons();
  }, [page]);

  if (pokemons.length === 0) {
    return <h1 className="text-center">Aguarde um momento...</h1>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-3 space-x-2 space-y-1">
        {pokemons.map((pokemon) => (
          <div
            className="flex flex-col justify-center items-center "
            key={pokemon.id}
          >
            <h1>{pokemon.name}</h1>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-20"
            />
            <div className="flex items-center justify-center space-x-1 text-xs">
              {pokemon.types.map((data) => (
                <h1 key={data.slot}>{data.type.name}</h1>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="px-3 py-2 mt-4 bg-slate-300 rounded-xl"
        onClick={() => setPage((page) => page + 1)}
      >
        Carregar mais
      </button>
    </div>
  );
}
