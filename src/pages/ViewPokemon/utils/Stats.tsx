import { Stat } from "../../../models/Stat";
import AttributeDiv from "./AttributeDiv";

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((data) => (
        <AttributeDiv key={data.stat.name}>
          <h1 className="text-xs">{data.stat.name.toUpperCase()} :</h1>
          <h1 className="text-sm">{data.base_stat}</h1>
        </AttributeDiv>
      ))}
    </>
  );
}
