import { PokemonListItem } from "./PokemonListItem";

export interface Ability {
  ability: PokemonListItem;
  is_hidden: boolean;
  slot: number;
}
