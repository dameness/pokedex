import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useContext } from "react";
import DarkModeContext from "@/contexts/DarkModeContext";

export default function RootLayout() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="h-full min-h-screen dark:bg-neutral-800">
        <Header />
        <main className="container mx-auto p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
