import { createContext } from "react";

interface Context {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const DarkModeContext = createContext<Context>({} as Context);

export default DarkModeContext;
