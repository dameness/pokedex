import { Stat } from "./Stat";
import { Ability } from "./Ability";
import { Type } from "./Type";

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: {
    front_default: string;
  };
  abilities: Ability[];
  stats: Stat[];
  types: Type[];
}