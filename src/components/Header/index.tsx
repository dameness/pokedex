import { FaHome, FaSearch, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-14 p-3 mb-4">
      <Link
        className="ml-4 px-1 flex items-center hover:scale-105 transition-all "
        to="/"
      >
        <img className="w-8" src="/pokeball.png" alt="pokeball" />
        <img
          className="w-24 mb-1 -ml-0.5"
          src="/pokedex.png"
          alt="pokedex-logo"
        />
      </Link>

      <div className="font-extrabold flex items-center space-x-4  mr-4 text-xs xs:text-sm">
        <Link
          to="/"
          className="flex text-slate-800 items-center hover:text-slate-600"
        >
          <FaHome className="mr-1" size={17} />
          Home
        </Link>
        <Link
          to="/favorites"
          className="flex text-slate-800 items-center hover:text-slate-600"
        >
          <FaStar className="mr-1" size={17} />
          Favorites
        </Link>
        <Link
          to="/search"
          className="flex text-slate-800 items-center hover:text-slate-600"
        >
          <FaSearch className="mr-1" size={17} />
          Search
        </Link>
      </div>
    </header>
  );
}
