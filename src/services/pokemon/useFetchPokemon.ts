import api from "@/config/api";
import { useQuery } from "react-query";

const getPokemon = async (id: number | string) => {
  const response = await api.get(`/pokemon/${id}`);
  return response.data;
};

export const useFetchPokemon = (id: number | string) => {
  return useQuery(["pokemon", id], () => getPokemon(id), {
    staleTime: 30 * 1000, // 30 seconds
  });
};
