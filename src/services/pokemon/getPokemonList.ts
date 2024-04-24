import api from "@/config/api";
export const getPokemonList = async () => {
  const response = await api.get(`/pokemon?limit=10000`);
  return response.data.results;
};
