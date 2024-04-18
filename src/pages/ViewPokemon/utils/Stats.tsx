import { Stat } from "../../../models/Stat";

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((data) => (
        <div
          key={data.stat.name}
          className=" font-extrabold rounded-sm py-1.5 px-6 bg-slate-300 flex items-center justify-between"
        >
          <h1 className="text-xs">{data.stat.name.toUpperCase()} :</h1>
          <h1 className="text-sm">{data.base_stat}</h1>
        </div>
      ))}
    </>
  );
}
