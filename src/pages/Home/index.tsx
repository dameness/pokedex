import { useEffect, useState } from "react";
import api from "../../services/api";
import { Pokemon } from "../../types/types";
import axios from "axios";
import PokemonGrid from "../../components/PokemonGrid";

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
    <div className="flex flex-col justify-center items-center xs:text-base text-xs">
      <PokemonGrid pokemons={pokemons} />
      <div className="flex items-center justify-center space-x-3 mt-4">
        <button
          className="px-3 py-2 bg-slate-300 rounded-xl"
          onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
        >
          Página anterior
        </button>
        <button
          className="px-3 py-2 bg-slate-300 rounded-xl"
          onClick={() => setPage((page) => page + 1)}
        >
          Próxima Página
        </button>
      </div>
    </div>
  );
}
