import api from "@/config/api";
export const getPokemon = async (id: number) => {
  const response = await api.get(`/pokemon/${id}`);
  return response.data;
};
