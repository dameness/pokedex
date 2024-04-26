import api from "@/config/api";
import { useQuery } from "react-query";

const getPokemonList = async () => {
  const response = await api.get(`/pokemon?limit=10000`);
  return response.data.results;
};

export const useFetchPokemonList = () => {
  return useQuery("pokemon-list", () => getPokemonList(), {
    staleTime: 30 * 1000, // 30 seconds
  });
};
