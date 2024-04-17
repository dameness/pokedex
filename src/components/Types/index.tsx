import { Type } from "../../models/Type";
export default function Types({ types }: { types: Type[] }) {
  return (
    <>
      {types.map((data) => (
        <h1
          className={`bg-${data.type.name} py-0.5 px-2.5 rounded-lg outline outline-1 outline-black`}
          key={data.slot}
        >
          {data.type.name}
        </h1>
      ))}
    </>
  );
}
