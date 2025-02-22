import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../features/MovieApiSlice";
import { animeApi } from "../features/AnimeApiSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [animeApi.reducerPath]: animeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, animeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch