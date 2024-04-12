import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-12 p-3 bg-teal-100">
      <Link className="flex items-center space-x-1" to="/">
        <img className="w-8" src="/pokeball.png" alt="pokeball" />
        <h1>pokedex</h1>
      </Link>

      <div className="flex items-center space-x-4 text-xs xs:text-base">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </header>
  );
}
