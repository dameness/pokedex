import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./reducers/favReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "pokedex",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favReducer);

export const store = configureStore({
  reducer: {
    favorites: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
