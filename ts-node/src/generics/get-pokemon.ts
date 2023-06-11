import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

  const { data } = await axios.get<Pokemon>(`${baseUrl}/${pokemonId}`);

  //   console.log(resp.data.abilities[0].ability.url);

  return data;
};
