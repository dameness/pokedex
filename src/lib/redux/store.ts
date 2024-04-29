import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./reducers/favReducer";

export const store = configureStore({
  reducer: {
    favorites: favReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
