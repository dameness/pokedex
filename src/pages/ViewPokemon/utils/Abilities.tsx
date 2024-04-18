import { Ability } from "../../../models/Ability";

export default function Abilities({ abilities }: { abilities: Ability[] }) {
  return (
    <>
      {abilities.map((data) => (
        <div
          key={data.slot}
          className="font-extrabold rounded-sm py-1.5 px-6 bg-slate-300 flex items-center justify-between"
        >
          <h1 className="text-xs">SLOT [ {data.slot} ] :</h1>
          <h1 className="text-sm">{data.ability.name.toUpperCase()}</h1>
        </div>
      ))}
    </>
  );
}
