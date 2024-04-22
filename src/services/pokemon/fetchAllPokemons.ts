import { useCallback, useEffect, useState } from "react";
import { PokemonListItem } from "../../models/PokemonListItem";
import api from "../../config/api";

export const useFetchAllPokemons = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const getPokemonList = useCallback(() => {
    setIsFetching(true);
    api
      .get(`/pokemon?limit=10000`)
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  return {
    pokemonList,
    isFetching,
  };
};
