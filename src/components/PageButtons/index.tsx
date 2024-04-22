import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPages?: number;
}
export default function PageButtons({ setPage, maxPages }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      {" "}
      <button
        className="px-3 py-2 bg-slate-300 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-slate-100 transition"
        onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
      >
        <FaAngleLeft />
        Prev.
      </button>
      <button
        className="px-3 py-2 bg-slate-300 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 hover:text-slate-100 transition"
        onClick={() =>
          setPage((page) => {
            if (!maxPages) return page + 1;
            else {
              if (page < maxPages) return page + 1;
              else return page;
            }
          })
        }
      >
        Next
        <FaAngleRight />
      </button>
    </div>
  );
}
