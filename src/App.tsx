import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";
import DarkModeContext from "./contexts/DarkModeContext";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./lib/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        duration={1500}
        closeButton={true}
        theme={darkMode ? "dark" : "light"}
      />
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </PersistGate>
      </DarkModeContext.Provider>
    </QueryClientProvider>
  );
}
