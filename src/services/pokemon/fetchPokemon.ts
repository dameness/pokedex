import { useCallback, useEffect, useState } from "react";
import { Pokemon } from "../../models/Pokemon";
import api from "../../config/api";

export const useFetchPokemons = (id: number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isFetching, setIsFetching] = useState(false);

  const getPokemon = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/pokemon/${id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    getPokemon();
  }, [getPokemon]);

  return {
    pokemon,
    isFetching,
  };
};
