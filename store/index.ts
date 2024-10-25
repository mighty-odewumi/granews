import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
