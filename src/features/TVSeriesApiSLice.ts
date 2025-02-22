import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_API_BASE_URL, TMDB_API_KEY } from "../utils/config";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_API_BASE_URL,
    prepareHeaders: headers => {
      headers.set("Accept", "application/json")
      return headers
    }
  }),
  endpoints: builder => ({
    getSeries: builder.query({
      query: () => `/discover/movie?api_key=${TMDB_API_KEY}`,
    }),
    getPopularSeries: builder.query({
      query: () => `/movie/popular?page=1&api_key=${TMDB_API_KEY}`
    })
  })
})

export const { useGetSeriesQuery, useGetPopularSeriesQuery } = seriesApi