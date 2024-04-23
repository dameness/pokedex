import { Ability } from "../../../models/Ability";
import AttributeDiv from "./AttributeDiv";

export default function Abilities({ abilities }: { abilities: Ability[] }) {
  return (
    <>
      {abilities.map((data) => (
        <AttributeDiv key={data.slot}>
          <h1 className="text-xs">SLOT [ {data.slot} ] :</h1>
          <h1 className="text-sm">{data.ability.name.toUpperCase()}</h1>
        </AttributeDiv>
      ))}
    </>
  );
}
