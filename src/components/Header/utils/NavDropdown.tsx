import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DarkModeContext from "@/contexts/DarkModeContext";

import { Home, Menu, Search, Star } from "lucide-react";
import { useContext } from "react";

import { Link } from "react-router-dom";

export default function NavDropdown() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="mr-8 dark:text-neutral-200">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>
            <Menu />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`${
            darkMode ? "bg-neutral-800/85 text-neutral-200" : "bg-amber-100/85"
          }`}
        >
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              to="/"
              className={`flex gap-1.5 items-center hover:${
                darkMode ? "text-neutral-300" : "text-slate-600"
              }`}
            >
              <Home size={17} />
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/favorites"
              className={`flex gap-1.5 items-center hover:${
                darkMode ? "text-neutral-300" : "text-slate-600"
              }`}
            >
              <Star size={17} />
              Favorites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/search"
              className={`flex gap-1.5 items-center hover:${
                darkMode ? "text-neutral-300" : "text-slate-600"
              }`}
            >
              <Search size={17} />
              Search
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
