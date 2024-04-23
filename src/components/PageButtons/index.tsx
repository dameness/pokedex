import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import StandardButton from "../StandardButton";

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  maxPages?: number;
}
export default function PageButtons({ setPage, maxPages }: Props) {
  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <StandardButton
        onClick={() => setPage((page) => (page > 1 ? page - 1 : page))}
      >
        <FaAngleLeft />
        Prev.
      </StandardButton>
      <StandardButton
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
      </StandardButton>
    </div>
  );
}
