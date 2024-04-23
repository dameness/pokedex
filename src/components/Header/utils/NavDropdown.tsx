import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Menu, Search, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavDropdown() {
  return (
    <div className="mr-8">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-1">
            <Menu />
            Menu
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Options</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              to="/"
              className="flex gap-1.5 items-center hover:text-slate-600"
            >
              <Home size={17} />
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/favorites"
              className="flex gap-1.5 items-center hover:text-slate-600"
            >
              <Star size={17} />
              Favorites
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              to="/search"
              className="flex gap-1.5 items-center hover:text-slate-600"
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
