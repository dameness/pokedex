import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
export default function PageButtons({ setPage }: Props) {
  return (
    <>
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
        onClick={() => setPage((page) => page + 1)}
      >
        Next
        <FaAngleRight />
      </button>
    </>
  );
}
