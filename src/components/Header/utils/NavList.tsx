import { Home, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavList() {
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
        <Star className="mr-1" size={17} />
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
