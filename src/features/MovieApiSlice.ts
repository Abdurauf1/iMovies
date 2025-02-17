import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../utils/config";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Accept", "application/json")
      return headers
    }
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => `/discover/movie?api_key=${TMDB_API_KEY}`,
    }),
    getPopularMovies: builder.query({
      query: () => `/movie/popular?page=1&api_key=${TMDB_API_KEY}`
    })
  })
})

export const { useGetMoviesQuery, useGetPopularMoviesQuery } = movieApi