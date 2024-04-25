import { Link } from "react-router-dom";
import NavDropdown from "./utils/NavDropdown";
import NavList from "./utils/NavList";
import { useMediaQuery } from "react-responsive";
import DarkModeSwitch from "./utils/DarkModeSwitch";

export default function Header() {
  const smallScreen = useMediaQuery({ maxWidth: 639 });
  return (
    <header className="flex items-center justify-between w-screen h-14 p-3 mb-4">
      <div className="flex items-center">
        <Link
          className="ml-4 px-1 flex items-center hover:scale-105 transition-all "
          to="/"
        >
          <img className="w-8 min-w-8" src="/pokeball.png" alt="pokeball" />
          <img
            className="w-24 min-w-24 mb-1 -ml-0.5"
            src="/pokedex.png"
            alt="pokedex-logo"
          />
        </Link>
        <DarkModeSwitch />
      </div>

      {smallScreen ? <NavDropdown /> : <NavList />}
    </header>
  );
}
