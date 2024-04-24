import { Switch } from "@/components/ui/switch";
import DarkModeContext from "@/contexts/DarkModeContext";
import { useContext } from "react";

export default function DarkModeSwitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
    </>
  );
}
