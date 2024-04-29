import { Home, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/hooks/useReduxHooks";

export default function NavList() {
  const { favorites } = useAppSelector((state) => state.favorites);
  return (
    <div className="font-extrabold flex items-center space-x-4 mr-4 text-xs xs:text-sm">
      <Link
        to="/"
        className="flex dark:text-neutral-200 dark:hover:text-neutral-300 text-slate-800 items-center hover:text-slate-600 "
      >
        <Home className="mr-1" size={17} />
        Home
      </Link>
      <Link
        to="/favorites"
        className="flex dark:text-neutral-200 dark:hover:text-neutral-300 text-slate-800 items-center hover:text-slate-600"
      >
        <div className="relative">
          {favorites.length > 0 && (
            <div className="absolute -bottom-2 -left-2 text-[9px] bg-red-300 text-black w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {favorites.length}
            </div>
          )}
          <Star className="mr-1" size={17} />
        </div>
        Favorites
      </Link>
      <Link
        to="/search"
        className="flex dark:text-neutral-200 dark:hover:text-neutral-300 text-slate-800 items-center hover:text-slate-600"
      >
        <Search className="mr-1" size={17} />
        Search
      </Link>
    </div>
  );
}
