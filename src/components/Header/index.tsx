import { FaHome, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-12 p-3 mb-4 bg-orange-200">
      <Link className="flex items-center" to="/">
        <img className="w-8" src="/pokeball.png" alt="pokeball" />
        <img className="w-24 mb-1" src="/pokedex.png" alt="pokedex-logo" />
      </Link>

      <div className="font-extrabold flex items-center space-x-4  mr-4 text-xs xs:text-sm">
        <Link to="/" className="flex items-center">
          <FaHome className="mr-0.5" />
          Home
        </Link>
        <Link to="/favorites" className="flex items-center">
          <FaStar className="mr-0.5" />
          Favorites
        </Link>
      </div>
    </header>
  );
}
